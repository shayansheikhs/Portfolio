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
  
  console.log('Navigating to Vape Portal UK...');
  await page.goto('https://vapeportal.co.uk/', { waitUntil: 'domcontentloaded', timeout: 90000 });
  
  console.log('Page loaded. Waiting for age verification modal...');
  await page.waitForTimeout(5000);
  
  // Try to locate and click the age gate button
  const ageGateButtonSelectors = [
    'button:has-text("18")',
    'button:has-text("Enter")',
    'button:has-text("Yes")',
    'button:has-text("Confirm")',
    'button:has-text("Agree")',
    'a:has-text("18")',
    'div[role="button"]:has-text("18")'
  ];
  
  let clicked = false;
  for (const selector of ageGateButtonSelectors) {
    const loc = page.locator(selector);
    const count = await loc.count();
    for (let i = 0; i < count; i++) {
      const element = loc.nth(i);
      const isVisible = await element.isVisible();
      const text = await element.innerText();
      // Only click if element is visible and does not contain a phone number (e.g. "+" or "+44")
      if (isVisible && !text.includes('+') && !text.includes('07727') && text.trim().length < 30) {
        console.log(`Found visible age gate element: "${text}". Clicking it...`);
        await element.click();
        clicked = true;
        break;
      }
    }
    if (clicked) break;
  }
  
  if (!clicked) {
    console.log('No specific text button found or clicked. Clicking at (500, 640) as fallback...');
    await page.mouse.click(500, 640);
  }
  
  await page.waitForTimeout(3000);
  
  console.log('Scrolling down page slowly to load ALL lazy assets (Pass 1)...');
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = 0; scrollY <= totalHeight; scrollY += 400) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(1500);
  }
  
  // Scroll to absolute bottom and wait
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(5000);
  
  console.log('Scrolling back up slowly (Pass 2 - catch remaining lazy images)...');
  const totalHeight2 = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = totalHeight2; scrollY >= 0; scrollY -= 400) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(800);
  }
  
  // Scroll down one more time quickly
  console.log('Final scroll pass...');
  for (let scrollY = 0; scrollY <= totalHeight2; scrollY += 600) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(500);
  }
  
  console.log('Scrolling back to top...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(3000);
  
  console.log('Saving full page screenshot to assets...');
  await page.screenshot({
    path: 'c:\\Users\\shayan.shaikh\\Downloads\\shayan-portfolio-main\\shayan-portfolio-main\\assets\\vape_portal_screenshot.png',
    fullPage: true
  });
  
  console.log('Capture completed successfully!');
  await browser.close();
})().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
