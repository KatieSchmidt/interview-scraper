//variables to get the scraped data json file to be utilized in the app
var fs = require("fs");
var data = fs.readFileSync("newFile.json", "utf8");
var dataStrings = JSON.parse(data);

//import the function to make qa objects
const returnQAObject = require("./returnQAObject.js");

//create function to make a list of QA objects
function makeQAObjectList(listOfQAStrings) {
  let tempList = listOfQAStrings.map(string => returnQAObject(string));
  return tempList;
}

//call function using scraped json data
const objectList = makeQAObjectList(dataStrings);

module.exports = objectList;
