const url =
  "https://www.fullstack.cafe/blog/50-junior-web-developer-interview%20-questions-and-answers-ultimate-list-2018";
const puppeteer = require("puppeteer");
const newFile = "../../newFile.json";
const fs = require("fs-extra");

//this goes to a url, scrapes the info and returns a promise of that info as a list
function returnQAStringList(aUrl) {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(aUrl);
      let qAList = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll(
          ".interview-form-field.article.ng-tns-c5-1.ng-star-inserted"
        );
        items.forEach(item => {
          results.push(item.innerText);
        });
        return results;
      });
      browser.close();
      return resolve(qAList);
    } catch (e) {
      return reject(e);
    }
  });
}

//this particularly goes to the url, gets the promised data, then uses that promised data to create a json file

returnQAStringList(url).then(data => {
  fs.outputJson(newFile, data);
});
