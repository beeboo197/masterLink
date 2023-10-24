const express = require("express");
const { Bot,webhookCallback } = require("grammy");
const puppeteer = require("puppeteer");
require('dotenv').config
const bot = new Bot(process.env.BOT_TOKEN);

bot.on('message', async (ctx) => {
    await ctx.reply("haha")
}
// bot.on('message', async (ctx) => {
//     const input = await ctx.msg.text.replace(/ /g, '')
//     const code = await input.split("\n")
//     const resultArray = [];
//     const browser = await puppeteer.launch({headless: true});
//     const page = await browser.newPage()
//     await page.setViewport({width: 1200, height: 720});
//     await page.goto('https://pages.lazada.vn/wow/i/vn/ecommerce/aff-short-link', { waitUntil: 'domcontentloaded' }); // wait until page load
//     await page.type('#q', "https://www.lazada.vn/catalog/?q=");  
//     await page.type('#masterLink', 'https://c.lazada.vn/t/c.06wSoi');
//     for (const codes in code) {
//     await page.waitForXPath(`//*[@id="sourceUrl"]`)
//     await page.$eval('#sourceUrl', textbox => textbox.value = '');
//     await page.type('#sourceUrl', `https://www.lazada.vn/catalog/?q=${code[codes]}`)
//     await page.click('#submitButton')
//     await page.waitForSelector('a#affShortLink');
//     await page.type('#q', "https://www.lazada.vn/catalog/?q=");
//     await page.waitForXPath("/html/body/div[2]/div/div/div/form/div[12]/div[1]/a")
//     await page.waitForXPath("/html/body/div[2]/div/div/div/form/div[12]/div[1]/a")
//     const value = await page.$eval('a#affShortLink', el => el.textContent + "?kol")
//     await resultArray.push(value); 
//     }
//     await ctx.reply(resultArray.toString().replace(/,/g,"\n"))
//     await browser.close() 
     
// })

if (process.env.NODE_ENV === "production") {
    const app = express();
    app.use(express.json());
    app.use(webhookCallback(bot, "express"));
  
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Bot listening on port ${PORT}`);
    });
  } else {
    bot.start();
  }

  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));


