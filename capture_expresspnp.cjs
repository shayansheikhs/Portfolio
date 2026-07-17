const { chromium } = require('playwright-core');

(async () => {
  console.log('Launching local Google Chrome...');
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: false,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
    timezoneId: 'America/New_York'
  });
  
  const page = await context.newPage();
  
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => undefined,
    });
  });
  
  console.log('Navigating to Express PNP...');
  await page.goto('https://www.expresspnp.com/', { waitUntil: 'domcontentloaded', timeout: 90000 });
  
  console.log('Page loaded. Waiting for content...');
  await page.waitForTimeout(6000);

  // Close any modal popups or cookie bars if possible (using common selectors)
  const popupSelectors = [
    'button:has-text("Accept")',
    'button:has-text("Close")',
    'button:has-text("Agree")',
    'button:has-text("Dismiss")',
    '.close-modal',
    '#close-btn'
  ];
  for (const sel of popupSelectors) {
    try {
      const el = page.locator(sel);
      if (await el.count() > 0 && await el.first().isVisible()) {
        await el.first().click();
        console.log(`Clicked close/accept popup button: ${sel}`);
        await page.waitForTimeout(1000);
      }
    } catch (e) {}
  }

  // Force load all lazy images
  console.log('Force-loading all lazy images...');
  await page.evaluate(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.loading = 'eager';
    });
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.getAttribute('data-src');
    });
    document.querySelectorAll('img[data-srcset]').forEach(img => {
      img.srcset = img.getAttribute('data-srcset');
    });
  });
  await page.waitForTimeout(2000);
  
  // PASS 1: Very slow scroll down
  console.log('PASS 1: Scrolling down very slowly...');
  let totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = 0; scrollY <= totalHeight; scrollY += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(2000);
    totalHeight = await page.evaluate(() => document.body.scrollHeight);
  }
  
  // Stay at bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('Waiting at bottom for 8 seconds...');
  await page.waitForTimeout(8000);

  // Force load lazy images again
  await page.evaluate(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.loading = 'eager';
    });
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.getAttribute('data-src');
    });
    document.querySelectorAll('img[data-srcset]').forEach(img => {
      img.srcset = img.getAttribute('data-srcset');
    });
  });
  await page.waitForTimeout(3000);
  
  // PASS 2: Scroll back up
  console.log('PASS 2: Scrolling back up...');
  const totalHeight2 = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = totalHeight2; scrollY >= 0; scrollY -= 400) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(1000);
  }
  
  // PASS 3: Final scroll down
  console.log('PASS 3: Final scroll down...');
  const totalHeight3 = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = 0; scrollY <= totalHeight3; scrollY += 500) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(800);
  }
  
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(5000);
  
  console.log('Scrolling back to top...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(4000);
  
  console.log('Saving full page screenshot...');
  await page.screenshot({
    path: 'c:\\Users\\shayan.shaikh\\Downloads\\shayan-portfolio-main\\shayan-portfolio-main\\assets\\expresspnp_screenshot.png',
    fullPage: true
  });
  
  console.log('Capture completed successfully!');
  await browser.close();
})().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
