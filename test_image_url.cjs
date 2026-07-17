const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  const page = await browser.newPage();
  
  page.on('response', response => {
    if (response.url().includes('othello-mid-sec-bann.jpg')) {
      console.log(`Image response: ${response.status()} ${response.statusText()}`);
    }
  });

  try {
    await page.goto('https://www.othello4kings.com/wp-content/uploads/2024/09/othello-mid-sec-bann.jpg', { timeout: 30000 });
    console.log('Successfully navigated to image URL');
  } catch (e) {
    console.error('Failed to load image:', e.message);
  }
  
  await browser.close();
})().catch(console.error);
