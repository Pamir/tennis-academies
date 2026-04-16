const puppeteer = require('puppeteer');

async function testVisibility() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  await page.goto('file:///C:/dev/tennis-academies/golf.html', { 
    waitUntil: 'networkidle2', 
    timeout: 15000 
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // Get detailed card and CSS information
  const cardDetails = await page.evaluate(() => {
    const cards = document.querySelectorAll('.academy-card');
    if (cards.length === 0) return { error: 'No cards found' };

    const firstCard = cards[0];
    const style = window.getComputedStyle(firstCard);
    
    return {
      totalCards: cards.length,
      firstCardId: firstCard.id,
      firstCardDataId: firstCard.getAttribute('data-id'),
      display: style.display,
      visibility: style.visibility,
      opacity: style.opacity,
      height: style.height,
      width: style.width,
      overflow: style.overflow,
      position: style.position,
      className: firstCard.className,
      HTML_Preview: firstCard.outerHTML.substring(0, 400),
      textContent: firstCard.textContent.substring(0, 200)
    };
  });

  console.log('CARD VISIBILITY ANALYSIS:');
  console.log(JSON.stringify(cardDetails, null, 2));

  // Check grid and parent elements
  const gridDetails = await page.evaluate(() => {
    const grid = document.getElementById('cardGrid');
    const mainContent = document.getElementById('mainContent');
    const body = document.body;

    if (!grid) return { error: 'No grid found' };

    const gridStyle = window.getComputedStyle(grid);
    const mainStyle = window.getComputedStyle(mainContent);
    const bodyStyle = window.getComputedStyle(body);

    return {
      grid: {
        display: gridStyle.display,
        visibility: gridStyle.visibility,
        opacity: gridStyle.opacity,
        height: gridStyle.height,
        width: gridStyle.width,
        children: grid.children.length
      },
      main: {
        display: mainStyle.display,
        visibility: mainStyle.visibility,
        opacity: mainStyle.opacity
      },
      body: {
        display: bodyStyle.display,
        visibility: bodyStyle.visibility,
        opacity: bodyStyle.opacity,
        height: bodyStyle.height
      }
    };
  });

  console.log('\nGRID/PARENT VISIBILITY:');
  console.log(JSON.stringify(gridDetails, null, 2));

  // Check if stylesheets loaded properly
  const stylesheets = await page.evaluate(() => {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    const sheets = [];
    links.forEach(link => {
      sheets.push({
        href: link.href,
        title: link.title,
        disabled: link.disabled,
        sheet: link.sheet ? 'loaded' : 'not loaded'
      });
    });
    return sheets;
  });

  console.log('\nSTYLESHEETS LOADED:');
  console.log(JSON.stringify(stylesheets, null, 2));

  await browser.close();
}

testVisibility().catch(console.error);
