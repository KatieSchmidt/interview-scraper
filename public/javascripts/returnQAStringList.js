const url =
  "https://www.fullstack.cafe/blog/50-junior-web-developer-interview%20-questions-and-answers-ultimate-list-2018";
const puppeteer = require("puppeteer");
const $ = require("cheerio");

//this logs a list of questions with their answers; not as objects, but as lists of strings.

const logQAStringList = function(url) {
  puppeteer
    .launch()
    .then(browser => {
      return browser.newPage();
    })
    .then(page => {
      return page
        .goto(url)
        .then(function() {
          return page.content();
        })
        .catch(err => {
          console.log(err.message);
        });
    })
    .then(html => {
      let tempList = [];
      $(
        ".interview-form-field.article.ng-tns-c5-1.ng-star-inserted",
        html
      ).each(function() {
        tempList.push($(this).text());
      });
      return tempList;
    })
    .then(tempList => {
      console.log(tempList);
    })
    .catch(function(err) {
      console.log("there was an error");
    });
};

logQAStringList(url);
