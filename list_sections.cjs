const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.othello4kings.com/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  
  const sections = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section, div.elementor-section')).map((sec, idx) => {
      // Get background image style
      const style = window.getComputedStyle(sec);
      const bgImg = style.backgroundImage;
      const htmlSnippet = sec.outerHTML.substring(0, 300);
      const dataBg = sec.getAttribute('data-bg') || sec.getAttribute('data-lazy-bg') || sec.getAttribute('data-bgset');
      
      return {
        index: idx,
        tagName: sec.tagName,
        className: sec.className,
        bgImg,
        dataBg,
        snippet: htmlSnippet
      };
    });
  });
  
  console.log(JSON.stringify(sections, null, 2));
  await browser.close();
})().catch(console.error);
