const { time } = require('console');
const puppeteer = require('puppeteer');
(async() => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 20
        });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);
        await page.setViewport({ width: 1000, height: 600 });
        await page.goto('https://www.facebook.com');
        await page.waitForSelector('#email');
        await page.type('#email', 'YOUR EMAIL HERE'); // here you put your email
        await page.type('#pass', 'YOUR PASSWORD'); // here you put your password
        await page.click(`[type="submit"]`);
        await page.waitForNavigation();
        await page.click(`body`); // this is because facebook leaves some black overlay if you log in with my chromium; it may not be the same for yours
        await page.goto('https://www.facebook.com/profile');
        await page.click('body');
        await page.click(`div[class="m9osqain a5q79mjw jm1wdb64 k4urcfbm"] > span`);
        //await page.click(`div[class="rq0escxv buofh1pr df2bnetk hv4rvrfc dati1w0a l9j0dhe7 k4urcfbm du4w35lb gbhij3x4"] > div > div > div > div > div > div > div > div > div > span > span`);
        //await page.click(`div[rq0escxv buofh1pr df2bnetk hv4rvrfc dati1w0a l9j0dhe7 k4urcfbm.du4w35lb.gbhij3x4] > div > div > div > div > div > div > div > div > div > span > span`);
        // type inside create post
        let sentenceList = [
            `I will give just about anything if I could make you care, he said. Especially about me.`,

            `This apparent hurly-burly and disorder turn out, after all, to reproduce real life with its fantastic ways more accurately than the most carefully studied out drama of manners. Every man is in himself all humanity, and if he writes what occurs to him he succeeds better than if he copies, with the help of a magnifying glass, objects placed outside of him.`
        ];


        for (let j = 0; j < sentenceList.length; j++) {
            let sentence = sentenceList[j];
            for (let i = 0; i < sentence.length; i++) {
                await page.keyboard.press(sentence[i]);
                if (i === sentence.length - 1) {
                    await page.keyboard.down('Control');
                    await page.keyboard.press(String.fromCharCode(13)); // character code for enter is 13
                    await page.keyboard.up('Control');
                    post = document.querySelector('div[aria-label="Post"]').click();
                    console.log('done');

                }
            }
        }


        console.log('THANKS');
    } catch (error) {
        console.error(error);
    }
})();