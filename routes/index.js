var express = require("express");
var router = express.Router();
let objectList = require("../public/javascripts/makeQAObjectList");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.redirect("/flashcards/1");
});

/* GET flashcard by id/index. */
router.get("/flashcards/:id", function(req, res, next) {
  const questionIndex = req.params.id - 1;
  res.render("flashcard", {
    question: objectList[questionIndex].question,
    answer: objectList[questionIndex].answer,
    index: questionIndex
  });
});

module.exports = router;
