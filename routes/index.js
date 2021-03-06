"use strict";

var express = require("express");
var router = express.Router();
let objectList = require("../public/javascripts/makeQAObjectList");

//parse data from new 30 second site
var fs = require("fs");
var data = fs.readFileSync("thirtySecondsOfInterviews.json", "utf8");
var thirtySecondsData = JSON.parse(data);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.redirect("/fullstack-cafe/1");
});

/* GET flashcard by id/index. */
router.get("/fullstack-cafe/:id", function(req, res, next) {
  let questionIndex = req.params.id - 1;
  let nextId;
  let previousId;
  if (questionIndex === 0) {
    previousId = objectList.length;
    nextId = Number(req.params.id) + 1;
  } else if (questionIndex === objectList.length - 1) {
    previousId = Number(req.params.id) - 1;
    nextId = 1;
  } else {
    previousId = Number(req.params.id) - 1;
    nextId = Number(req.params.id) + 1;
  }

  res.render("flashcard", {
    website: "fullstack-cafe",
    question: objectList[questionIndex].question,
    answer: objectList[questionIndex].answer,
    nextId: nextId,
    previousId: previousId,
    listLength: objectList.length
  });
});

/* GET  thirty seconds interview questions and answers*/
router.get("/thirty-seconds/:id", function(req, res, next) {
  let questionIndex = req.params.id - 1;
  let nextId;
  let previousId;
  if (questionIndex === 0) {
    previousId = objectList.length;
    nextId = Number(req.params.id) + 1;
  } else if (questionIndex === objectList.length - 1) {
    previousId = Number(req.params.id) - 1;
    nextId = 1;
  } else {
    previousId = Number(req.params.id) - 1;
    nextId = Number(req.params.id) + 1;
  }

  res.render("flashcard", {
    website: "thirty-seconds",
    question: thirtySecondsData[questionIndex].question,
    answer: thirtySecondsData[questionIndex].answer,
    nextId: nextId,
    previousId: previousId,
    listLength: thirtySecondsData.length
  });
});

module.exports = router;
