const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const urls = [
    { label: 'LOCAL', url: 'file:///C:/dev/tennis-academies/golf.html' },
    { label: 'DEPLOYED', url: 'https://pamir.github.io/tennis-academies/golf.html' }
  ];

  for (const test of urls) {
    const page = await browser.newPage();
    page.setViewport({ width: 1024, height: 768 });

    console.log(`\nLoading ${test.label}: ${test.url}`);

    try {
      await page.goto(test.url, { waitUntil: 'networkidle2', timeout: 15000 });
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Get page metrics
      const metrics = await page.evaluate(() => {
        const grid = document.getElementById('cardGrid');
        const cards = document.querySelectorAll('.academy-card');
        
        return {
          cardCount: cards.length,
          gridDisplay: window.getComputedStyle(grid).display,
          bodyBackgroundColor: window.getComputedStyle(document.body).backgroundColor,
          gridBackgroundColor: window.getComputedStyle(grid).backgroundColor,
          firstCardText: cards.length > 0 ? cards[0].textContent.substring(0, 100) : 'no cards',
          pageTitle: document.title,
          h1Text: document.querySelector('h1')?.textContent || 'no h1'
        };
      });

      console.log(`✓ Page loaded successfully`);
      console.log(`  Cards rendered: ${metrics.cardCount}`);
      console.log(`  Grid display: ${metrics.gridDisplay}`);
      console.log(`  Page title: ${metrics.pageTitle}`);
      console.log(`  H1: ${metrics.h1Text}`);
      console.log(`  First card preview: ${metrics.firstCardText}`);

      // Capture screenshot
      const screenshotPath = path.join(
        'C:\\dev\\tennis-academies',
        `golf-${test.label.toLowerCase()}.png`
      );
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`✓ Screenshot saved: ${screenshotPath}`);

    } catch (error) {
      console.error(`✗ Error loading ${test.label}:`, error.message);
    }

    await page.close();
  }

  await browser.close();
  console.log('\n✅ All captures complete');
}

captureScreenshots().catch(console.error);
