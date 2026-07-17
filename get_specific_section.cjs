const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.othello4kings.com/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  
  const sectionInfo = await page.evaluate(() => {
    // Find section with "POPULAR PRODUCTS"
    const pop = Array.from(document.querySelectorAll('*')).find(el => el.textContent && el.textContent.trim() === 'POPULAR PRODUCTS');
    // Find section with "STYLE TRENDS"
    const style = Array.from(document.querySelectorAll('*')).find(el => el.textContent && el.textContent.trim() === 'STYLE TRENDS');
    
    if (pop && style) {
      // Find the top section for popular products
      let popSec = pop;
      while (popSec && popSec.tagName !== 'SECTION') {
        popSec = popSec.parentElement;
      }
      
      // Find the top section for style trends
      let styleSec = style;
      while (styleSec && styleSec.tagName !== 'SECTION') {
        styleSec = styleSec.parentElement;
      }
      
      const middleElements = [];
      let current = popSec ? popSec.nextElementSibling : null;
      while (current && current !== styleSec) {
        middleElements.push({
          tagName: current.tagName,
          className: current.className,
          id: current.id,
          outerHTML: current.outerHTML.substring(0, 1000),
          computedStyle: {
            backgroundColor: window.getComputedStyle(current).backgroundColor,
            backgroundImage: window.getComputedStyle(current).backgroundImage,
            height: window.getComputedStyle(current).height
          }
        });
        current = current.nextElementSibling;
      }
      
      return {
        popSecFound: !!popSec,
        styleSecFound: !!styleSec,
        middleCount: middleElements.length,
        middleElements
      };
    }
    return 'Could not locate both sections';
  });
  
  console.log(JSON.stringify(sectionInfo, null, 2));
  await browser.close();
})().catch(console.error);
