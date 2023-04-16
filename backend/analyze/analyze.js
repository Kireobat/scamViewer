const puppeteer = require('puppeteer');
const whois = require('whois');
const dns = require('dns');
const apiKey = process.env.WHOIS_API_KEY;

/**
 * @param {string} url The url of the website to take a screenshot of
 * @returns {Promise<void>} A promise that resolves when the screenshot is taken
 */
screenshot = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'example.png'});
    await browser.close();
}


/**
 * @param {string} url The url of the website to get the IP of
 * @returns {Promise<string>} A promise that resolves to the IP of the website
 */
getIP = async (url) => {
    let address = null;
  
    if (url.startsWith('https://')) {
      url = url.replace('https://', '');
    } else if (url.startsWith('http://')) {
      url = url.replace('http://', '');
    }
  
    try {
      address = await dns.promises.lookup(url);
      //console.log('address:', address.address);
      return address.address;
    } catch (err) {
      console.error('Error:', err);
      return null;
    }
  };


/**
 * @param {string} url The url of the website to get the host info of
 * @returns {Promise<string>} A promise that resolves to the host info of the website
 */
getHostInfo2 = async (url) => {
    if(url.startsWith("https://")){
        url = url.replace("https://","");
    }
    else if(url.startsWith("http://")){
        url = url.replace("http://","");
    }

    
    return new Promise((resolve, reject) => {
        whois.lookup(url, function(err, data) {
            console.log(data);
          if (err) {
            console.log(err);
            reject(err);
          }
          const hostInfo = {};
          const regex = /((?:Registrant|Organisation|Registrar|Email|Website|Name Server|Name servers):(?:\n\s+[\S\s]+?(?!(?:Registrant|Organisation|Registrar|Email|Website|Name Server|Name servers):)))*\n\s*Name servers?:\s*([\S\s]*?)(?:Registrant|Organisation|Registrar|Email|Website|Name Server|Name servers|$)/gi;
          let nameservers = [];
          let matches;
          while ((matches = regex.exec(data)) !== null) {
            if (matches[1]) {
              const infoRegex = /(\w+):\s*(.*)/g;
              let infoMatches;
              while ((infoMatches = infoRegex.exec(matches[1])) !== null) {
                let key = infoMatches[1].toLowerCase().replace(/\s+/g, '');
                let value = infoMatches[2].trim();
                if (key === 'technical') {
                  key = 'organisation';
                  value = value.replace(/^Organisation:\s*/, '');
                }
                if (key === 'registrar') {
                    value = value.replace(/^Name:\s*/, '');
                }
                hostInfo[key] = value;
              }
            }
            if (matches[2]) {
              const nameserversText = matches[2];
              nameservers = nameserversText
                .trim()
                .split('\n')
                .map((nameserver) => nameserver.trim())
                .filter((nameserver) => !nameserver.match(/^(Please|visit|for|more|info|www\.)\b/i));
            }
          }
          hostInfo.nameservers = nameservers;
          resolve(hostInfo);
        });
    });
    
}

getHostInfo = async (url) => {
    if(url.startsWith("https://")){
        url = url.replace("https://","");
    }
    else if(url.startsWith("http://")){
        url = url.replace("http://","");
    }

    console.log("fetching whois info for: "+url)

    let result;

    await fetch("https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey="+apiKey+"&domainName="+url+"&outputFormat=JSON")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        result = data;
    });

    return result;
}



//screenshot("https://kireobat.eu");
    
//getIP("https://kireobat.eu");

//getHostInfo("https://kireobat.eu");

module.exports = { screenshot, getIP, getHostInfo };