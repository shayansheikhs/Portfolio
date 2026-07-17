const { chromium } = require('playwright-core');

(async () => {
  console.log('Launching local Google Chrome...');
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  
  const page = await browser.newPage();
  
  // Set standard desktop viewport and User Agent
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('https://vapeportal.co.uk/', { waitUntil: 'domcontentloaded' });
  
  console.log('Page loaded. Waiting for age verification modal...');
  await page.waitForTimeout(4000);
  
  // Try to locate and click the age gate button
  const locators = [
    page.locator('button:has-text("18")'),
    page.locator('button:has-text("Enter")'),
    page.locator('button:has-text("Yes")'),
    page.locator('button:has-text("Confirm")'),
    page.locator('a:has-text("18")'),
    page.locator('div[role="button"]:has-text("18")'),
    page.locator('div[role="button"]:has-text("Enter")')
  ];
  
  let clicked = false;
  for (const loc of locators) {
    if (await loc.count() > 0) {
      const text = await loc.first().innerText();
      console.log(`Found age gate button: "${text}". Clicking it...`);
      await loc.first().click();
      clicked = true;
      break;
    }
  }
  
  if (!clicked) {
    console.log('No specific text button found. Clicking at (500, 640) as fallback...');
    await page.mouse.click(500, 640);
  }
  
  await page.waitForTimeout(3000);
  
  console.log('Scrolling down page to load lazy assets...');
  // Scroll in steps
  for (let scrollY = 0; scrollY < 8000; scrollY += 800) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(800);
  }
  
  console.log('Scrolling back to top...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(2000);
  
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
