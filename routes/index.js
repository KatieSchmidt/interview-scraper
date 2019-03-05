"use strict";

var express = require("express");
var router = express.Router();
let objectList = require("../public/javascripts/makeQAObjectList");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.redirect("/flashcards/1");
});

/* GET flashcard by id/index. */
router.get("/flashcards/:id", function(req, res, next) {
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
    question: objectList[questionIndex].question,
    answer: objectList[questionIndex].answer,
    nextId: nextId,
    previousId: previousId
  });
});

/* GET  */
router.get("/logit", function(req, res, next) {
  res.send(objectList);
});

module.exports = router;
