const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('response', async response => {
        const url = response.url();
        if (response.request().resourceType() === 'image') {
            response.buffer().then(file => {
                const fileName = url.split('/').pop();
                const filePath = path.resolve(__dirname, fileName);
                const writeStream = fs.createWriteStream(filePath);
                writeStream.write(file);
            });
        }
    });

    await page.goto('https://www.google.com/search?q=cat&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj45ej4np30AhVeslYBHTnYCfQQ_AUoAXoECAIQAw&biw=1536&bih=750&dpr=1.25');
    await browser.close();

})();