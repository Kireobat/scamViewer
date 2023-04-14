const puppeteer = require('puppeteer');

screenshot = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'example.png'});
    await browser.close();
}

getIP = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.whatismyip.com/dns-lookup/");

    await page.waitForSelector('input[type="url"]');
    await page.type('input[type="url"]', url);

    await page.click('button[id="tool-run"]');

    await page.waitForSelector('a[title^="Detailed Information About"]');

    const result = await page.evaluate(() => {
        return document.querySelector('a[title^="Detailed Information About"]').innerHTML 
    });

    await browser.close();

    console.log("ip",result);

    return result;
}

getHostInfo = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://who.is/");

    await page.waitForSelector('input[name="searchString"]');
    await page.type('input[name="searchString"]', url);

    console.log("url typed")

    await page.click('button[class="btn btn-primary btn-lg"]');

    console.log("button clicked")

    await setTimeout(function(){}, 3000);

    const result = await page.evaluate(() => {
        return document.querySelector("div.row:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > pre:nth-child(1)").innerHTML 
    });

    await browser.close();

    console.log("hostInfo",result);

    return result;
}

//screenshot("https://kireobat.eu");
    
//getIP("https://kireobat.eu");

getHostInfo("https://kireobat.eu");