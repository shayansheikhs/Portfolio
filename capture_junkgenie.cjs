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
  
  console.log('Navigating to Junk Genie...');
  await page.goto('https://www.junkgenieremoval.com/', { waitUntil: 'networkidle', timeout: 120000 });
  await page.waitForTimeout(5000);

  console.log('Reloading the page to ensure all elements load properly...');
  await page.reload({ waitUntil: 'networkidle', timeout: 120000 });
  console.log('Waiting 15 seconds at the top for assets to settle...');
  await page.waitForTimeout(15000);

  // Play any HTML5 videos if present
  await page.evaluate(() => {
    document.querySelectorAll('video').forEach(video => {
      video.play().catch(() => {});
    });
  });

  // Close any modal popups or cookie bars
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
        await page.waitForTimeout(2000);
      }
    } catch (e) {}
  }

  // Force load all lazy images with various common lazy-loading attributes
  console.log('Force-loading all lazy images...');
  await page.evaluate(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'eager';
      const srcAttr = img.getAttribute('data-src') || img.getAttribute('data-lazy-src') || img.getAttribute('data-original');
      if (srcAttr) {
        img.src = srcAttr;
      }
      const srcsetAttr = img.getAttribute('data-srcset') || img.getAttribute('data-lazy-srcset');
      if (srcsetAttr) {
        img.srcset = srcsetAttr;
      }
      // Force display if hidden by lazy load libraries
      img.style.opacity = '1';
      img.style.visibility = 'visible';
    });
  });
  await page.waitForTimeout(3000);
  
  // PASS 1: Very slow scroll down with longer wait per step
  console.log('PASS 1: Scrolling down very slowly...');
  let totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = 0; scrollY <= totalHeight; scrollY += 250) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(2500); // 2.5s per step
    totalHeight = await page.evaluate(() => document.body.scrollHeight);
  }
  
  // Stay at bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('Waiting at bottom for 12 seconds...');
  await page.waitForTimeout(12000);

  // Force load lazy images again at bottom
  await page.evaluate(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'eager';
      const srcAttr = img.getAttribute('data-src') || img.getAttribute('data-lazy-src') || img.getAttribute('data-original');
      if (srcAttr) {
        img.src = srcAttr;
      }
      const srcsetAttr = img.getAttribute('data-srcset') || img.getAttribute('data-lazy-srcset');
      if (srcsetAttr) {
        img.srcset = srcsetAttr;
      }
      img.style.opacity = '1';
      img.style.visibility = 'visible';
    });
  });
  await page.waitForTimeout(3000);
  
  // PASS 2: Scroll back up slowly
  console.log('PASS 2: Scrolling back up...');
  const totalHeight2 = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = totalHeight2; scrollY >= 0; scrollY -= 350) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(1500);
  }
  
  // PASS 3: Final scroll down
  console.log('PASS 3: Final scroll down...');
  const totalHeight3 = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = 0; scrollY <= totalHeight3; scrollY += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(1000);
  }
  
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(5000);
  
  console.log('Scrolling back to top...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(8000); // 8 seconds at top to make sure everything settles
  
  console.log('Saving full page screenshot...');
  await page.screenshot({
    path: 'c:\\Users\\shayan.shaikh\\Downloads\\shayan-portfolio-main\\shayan-portfolio-main\\assets\\junkgenie_screenshot.png',
    fullPage: true
  });
  
  console.log('Capture completed successfully!');
  await browser.close();
})().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
