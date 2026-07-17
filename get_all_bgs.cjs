const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.othello4kings.com/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  
  const bgs = await page.evaluate(() => {
    const results = [];
    
    // Find all stylesheet rules containing background-image
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        const rules = Array.from(sheet.cssRules || sheet.rules);
        for (const rule of rules) {
          if (rule.style && rule.style.backgroundImage && rule.style.backgroundImage !== 'none') {
            results.push({
              selector: rule.selectorText,
              bg: rule.style.backgroundImage
            });
          }
        }
      } catch (e) {
        // Cross-origin stylesheets
      }
    }
    
    // Also find inline style attributes
    document.querySelectorAll('*').forEach(el => {
      if (el.style.backgroundImage && el.style.backgroundImage !== 'none') {
        results.push({
          tag: el.tagName,
          id: el.id,
          class: el.className,
          inlineBg: el.style.backgroundImage
        });
      }
    });
    
    return results;
  });
  
  console.log(JSON.stringify(bgs, null, 2));
  await browser.close();
})().catch(console.error);
