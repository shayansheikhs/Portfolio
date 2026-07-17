const { chromium } = require('playwright-core');

(async () => {
  console.log('Launching local Google Chrome with WAF evasion...');
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
    locale: 'en-GB',
    timezoneId: 'Europe/London'
  });
  
  const page = await context.newPage();
  
  // Mask webdriver
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => undefined,
    });
  });
  
  console.log('Navigating to Skull Vaping...');
  await page.goto('https://www.skullvaping.com/', { waitUntil: 'domcontentloaded', timeout: 90000 });
  
  console.log('Page loaded. Waiting for any age verification or promo modals...');
  await page.waitForTimeout(6000);
  
  // Try to close any age gate or popup
  const ageGateButtonSelectors = [
    'button:has-text("18")',
    'button:has-text("Enter")',
    'button:has-text("Yes")',
    'button:has-text("Confirm")',
    'button:has-text("Agree")',
    'a:has-text("18")',
    'div[role="button"]:has-text("18")',
    '#age-verify-enter',
    '.age-gate-submit'
  ];
  
  let clicked = false;
  for (const selector of ageGateButtonSelectors) {
    try {
      const loc = page.locator(selector);
      const count = await loc.count();
      for (let i = 0; i < count; i++) {
        const element = loc.nth(i);
        const isVisible = await element.isVisible();
        const text = await element.innerText();
        if (isVisible && !text.includes('+') && text.trim().length < 35) {
          console.log(`Found visible gate element: "${text.trim()}". Clicking it...`);
          await element.click();
          clicked = true;
          break;
        }
      }
    } catch (e) {}
    if (clicked) break;
  }
  
  if (clicked) {
    await page.waitForTimeout(3000);
  }

  // Force load all lazy images before scrolling
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
  
  // PASS 1: Very slow scroll down — 300px steps, 2 sec wait
  console.log('PASS 1: Scrolling down very slowly...');
  let totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = 0; scrollY <= totalHeight; scrollY += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(2000);
    // Recalculate in case page grows
    totalHeight = await page.evaluate(() => document.body.scrollHeight);
  }
  
  // Stay at bottom longer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  console.log('Waiting at bottom for 8 seconds...');
  await page.waitForTimeout(8000);

  // Force load lazy images again at bottom
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
  
  // PASS 2: Scroll back up slowly
  console.log('PASS 2: Scrolling back up slowly...');
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
  
  // Wait at bottom again
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(5000);
  
  console.log('Scrolling back to top...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(4000);
  
  console.log('Saving full page screenshot to assets...');
  await page.screenshot({
    path: 'c:\\Users\\shayan.shaikh\\Downloads\\shayan-portfolio-main\\shayan-portfolio-main\\assets\\skull_vaping_screenshot.png',
    fullPage: true
  });
  
  console.log('Capture completed successfully!');
  await browser.close();
})().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
