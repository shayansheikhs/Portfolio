const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.othello4kings.com/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  
  // Find the Style Trends heading and get parent/sibling html
  const html = await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('*')).find(e => e.textContent && e.textContent.includes('STYLE TRENDS'));
    if (el) {
      // Find its section or previous sibling
      let parent = el;
      while (parent && parent.tagName !== 'SECTION') {
        parent = parent.parentElement;
      }
      if (parent) {
        const prev = parent.previousElementSibling;
        return {
          currentSection: parent.outerHTML.substring(0, 1000),
          prevSection: prev ? prev.outerHTML.substring(0, 2000) : 'none'
        };
      }
    }
    return 'Not found';
  });
  
  console.log(JSON.stringify(html, null, 2));
  await browser.close();
})().catch(console.error);
