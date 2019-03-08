const url = "https://30secondsofinterviews.org/";
const puppeteer = require("puppeteer");
const newFile = "../../thirtySecondsOfInterviews.json";
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
        let questions = document.querySelectorAll(".Question__heading");
        let answers = document.querySelectorAll(".Question__answer");
        for (var i = 0; i < questions.length; i++) {
          let temp = {};
          temp.index = i;
          temp.question = questions[i].innerText;
          temp.answer = answers[i].innerText;
          results.push(temp);
        }
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
