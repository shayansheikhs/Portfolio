const { chromium } = require('playwright-core');

(async () => {
  console.log('Launching Chrome for Othello4Kings...');
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: false,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
    ]
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });

  const page = await context.newPage();
  console.log('Navigating to othello4kings.com...');
  await page.goto('https://www.othello4kings.com/', { waitUntil: 'domcontentloaded', timeout: 90000 });

  console.log('Page loaded. Waiting 8s for images to start loading...');
  await page.waitForTimeout(8000);

  // Slow scroll Pass 1 — trigger lazy loaded images
  console.log('Scroll Pass 1 (slow)...');
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = 0; scrollY <= totalHeight; scrollY += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(1500);
  }
  console.log('Reached bottom. Waiting 5s...');
  await page.waitForTimeout(5000);

  // Scroll back up
  console.log('Scrolling back to top...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(3000);

  // Slow scroll Pass 2 — catch anything missed
  console.log('Scroll Pass 2...');
  const newHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let scrollY = 0; scrollY <= newHeight; scrollY += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(1200);
  }
  console.log('Pass 2 complete. Waiting 5s...');
  await page.waitForTimeout(5000);

  // Scroll to top for screenshot
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(3000);

  console.log('Taking full-page screenshot...');
  await page.screenshot({
    path: 'assets/othello4kings_screenshot.png',
    fullPage: true
  });

  console.log('Screenshot saved: assets/othello4kings_screenshot.png');
  await browser.close();
  console.log('Done!');
})();
