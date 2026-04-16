const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function diagnoseGolfPage() {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Capture all console messages
    const consoleLogs = [];
    page.on('console', msg => {
      consoleLogs.push({
        type: msg.type(),
        text: msg.text(),
        location: msg.location()
      });
    });

    // Capture page errors
    const pageErrors = [];
    page.on('error', err => {
      pageErrors.push({
        type: 'page_error',
        message: err.message,
        stack: err.stack
      });
    });

    // Capture uncaught exceptions
    page.on('pageerror', err => {
      pageErrors.push({
        type: 'uncaught_exception',
        message: err.message,
        stack: err.stack
      });
    });

    // Capture network errors
    const networkErrors = [];
    page.on('requestfailed', request => {
      networkErrors.push({
        url: request.url(),
        failure: request.failure()
      });
    });

    // Test both local and deployed versions
    const testCases = [
      { label: 'LOCAL FILE', url: 'file:///C:/dev/tennis-academies/golf.html' },
      { label: 'DEPLOYED (GitHub Pages)', url: 'https://pamir.github.io/tennis-academies/golf.html' }
    ];

    for (const testCase of testCases) {
      consoleLogs.length = 0;
      pageErrors.length = 0;
      networkErrors.length = 0;

      console.log(`\n${'='.repeat(70)}`);
      console.log(`Testing: ${testCase.label}`);
      console.log(`URL: ${testCase.url}`);
      console.log('='.repeat(70));
      
      try {
        await page.goto(testCase.url, { waitUntil: 'networkidle2', timeout: 15000 });

        // Wait a bit for any async operations
        await new Promise(resolve => setTimeout(resolve, 2000));

    // Check if cards were rendered
    const cardCount = await page.evaluate(() => {
      return document.querySelectorAll('.card').length;
    });

    // Check if academy-card were rendered
    const academyCardCount = await page.evaluate(() => {
      return document.querySelectorAll('.academy-card').length;
    });

    // Check the content of cardGrid
    const gridContent = await page.evaluate(() => {
      const grid = document.getElementById('cardGrid');
      return {
        html: grid ? grid.innerHTML.substring(0, 500) : 'cardGrid not found',
        childCount: grid ? grid.children.length : 0,
        classList: grid ? grid.className : 'N/A'
      };
    });

    // Check if ACADEMIES array exists
    const dataStatus = await page.evaluate(() => {
      return {
        academiesExists: typeof ACADEMIES !== 'undefined',
        academiesLength: typeof ACADEMIES !== 'undefined' ? ACADEMIES.length : 0,
        sportType: typeof SPORT_TYPE !== 'undefined' ? SPORT_TYPE : 'undefined',
        appExists: typeof renderAcademies !== 'undefined'
      };
    });

    // Capture the full page HTML
    const html = await page.content();

    console.log('\n📊 DATA STATUS:');
    console.log(JSON.stringify(dataStatus, null, 2));
    
    console.log('\n🎴 CARD RENDERING:');
    console.log(`Cards rendered (.card): ${cardCount}`);
    console.log(`Academy cards rendered (.academy-card): ${academyCardCount}`);
    console.log(`Grid child elements: ${gridContent.childCount}`);
    console.log(`Grid classes: ${gridContent.classList}`);
    if (gridContent.html.length > 0) {
      console.log(`Grid HTML (first 500 chars): ${gridContent.html}`);
    }

    console.log('\n⚠️  CONSOLE MESSAGES:');
    if (consoleLogs.length === 0) {
      console.log('(No console messages)');
    } else {
      consoleLogs.forEach((log, i) => {
        console.log(`[${log.type}] ${log.text}`);
        if (log.location) {
          console.log(`  at ${log.location.url}:${log.location.lineNumber}:${log.location.columnNumber}`);
        }
      });
    }

    console.log('\n❌ PAGE ERRORS:');
    if (pageErrors.length === 0) {
      console.log('(No page errors)');
    } else {
      pageErrors.forEach((err, i) => {
        console.log(`[${err.type}] ${err.message}`);
        console.log(err.stack || '');
      });
    }

    console.log('\n🌐 NETWORK ERRORS:');
    if (networkErrors.length === 0) {
      console.log('(No network errors)');
    } else {
      networkErrors.forEach((err, i) => {
        console.log(`${err.url}`);
        console.log(`  Error: ${JSON.stringify(err.failure)}`);
      });
    }

    // Check external dependencies
    console.log('\n📦 EXTERNAL DEPENDENCIES:');
    const deps = await page.evaluate(() => {
      return {
        leaflet: typeof L !== 'undefined',
        i18n: typeof i18n !== 'undefined',
        moment: typeof moment !== 'undefined'
      };
    });
    console.log(JSON.stringify(deps, null, 2));

      } catch (error) {
        console.log(`❌ Error loading page: ${error.message}`);
      }
    }

    console.log('\n✅ DIAGNOSIS COMPLETE\n');

  } catch (error) {
    console.error('Error during diagnosis:', error);
  } finally {
    if (browser) await browser.close();
  }
}

diagnoseGolfPage();
