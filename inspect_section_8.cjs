const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.othello4kings.com/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  
  const info = await page.evaluate(() => {
    const el = document.querySelector('[data-id="6460d673"]');
    if (!el) return 'Element not found';
    
    // Check computed styles
    const style = window.getComputedStyle(el);
    const overlay = el.querySelector('.elementor-background-overlay');
    const overlayStyle = overlay ? window.getComputedStyle(overlay) : null;
    
    return {
      outerHTML: el.outerHTML.substring(0, 1000),
      style: {
        backgroundImage: style.backgroundImage,
        backgroundColor: style.backgroundColor,
        backgroundSize: style.backgroundSize,
        backgroundPosition: style.backgroundPosition,
        opacity: style.opacity,
        display: style.display,
        visibility: style.visibility,
        height: style.height
      },
      hasOverlay: !!overlay,
      overlayStyle: overlayStyle ? {
        backgroundImage: overlayStyle.backgroundImage,
        backgroundColor: overlayStyle.backgroundColor,
        opacity: overlayStyle.opacity
      } : null
    };
  });
  
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})().catch(console.error);
