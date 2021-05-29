//coded by nicemare cheerss (^.^)/
const puppeteer = require('puppeteer')
//const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
const fs = require('fs');
const randomName = require('random-name');
const { devices } = puppeteer;
const iPhoneX = devices["iPhone X"];

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    args: ['defaultViewport: 1400,900','--window-size=800,1600','--incognito','--no-default-browser-check','--disable-site-isolation-trials','--no-experiments','--ignore-gpu-blacklist','--ignore-certificate-errors','--ignore-certificate-errors-spki-list','--disable-gpu','--disable-extensions','--disable-default-apps','--enable-features=NetworkService','--disable-setuid-sandbox','--no-sandbox','--disable-webgl','--disable-threaded-animation','--disable-threaded-scrolling','--disable-in-process-stack-traces','--disable-histogram-customizer','--disable-gl-extensions','--disable-composited-antialiasing','--disable-canvas-aa','--disable-3d-apis','--disable-accelerated-2d-canvas','--disable-accelerated-jpeg-decoding','--disable-accelerated-mjpeg-decode','--disable-app-list-dismiss-on-blur','--disable-accelerated-video-decode']
});
  const pageList = await browser.pages();   
  const context = await browser.createIncognitoBrowserContext();  
  const page = await context.newPage();
 
  function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ4';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

//console.log(makeid(9));

  const ali2 = `https://kapalapisemangatmilyaran.com/`;
  await page.emulate(iPhoneX);
  await page.goto(`${ali2}`,{waitUntil : 'networkidle2'});
   
  await page.type('#kodeunik', makeid(9))
  await page.type('#ktp','3322065502750004')
  await page.type('#nama','UMI MARDLIYYAH')
  await page.type('#hp','089635794090')
  await page.type('#kota','JAWA TENGAH - KAB SEMARANG')

  await page.click('#btnSubmit', { waitUntil: 'networkiddle2'})
  console.log("CODE :",makeid(9));
//await browser.close()
 })();