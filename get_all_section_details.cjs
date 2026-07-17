const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.othello4kings.com/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  
  const sections = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section, div.elementor-section')).map((sec, index) => {
      const headings = Array.from(sec.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => h.innerText);
      const style = window.getComputedStyle(sec);
      const bgImg = style.backgroundImage;
      const bgColor = style.backgroundColor;
      return {
        index,
        id: sec.id || sec.getAttribute('data-id'),
        classes: sec.className,
        headings,
        bgImg,
        bgColor
      };
    });
  });
  
  console.log(JSON.stringify(sections, null, 2));
  await browser.close();
})().catch(console.error);
