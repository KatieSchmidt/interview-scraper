"use strict";

//buttons
const seeAnswerButton = document.querySelector(".button__see-answer ");
const seeQuestionButton = document.querySelector(".button__see-question");

//card side selectors
const cardFrontQuestion = document.querySelector(".card__front-question");
const cardBackAnswer = document.querySelector(".card__back-answer");

//button sections
const seeAnswerButtonSection = document.querySelector(
  ".button__section-question"
);
const seeQuestionButtonSection = document.querySelector(
  ".button__section-answer"
);

seeAnswerButton.onclick = () => {
  cardFrontQuestion.classList.add("display-none");
  seeAnswerButtonSection.classList.add("display-none");
  cardBackAnswer.classList.remove("display-none");
  seeQuestionButtonSection.classList.remove("display-none");
};

seeQuestionButton.onclick = () => {
  cardFrontQuestion.classList.remove("display-none");
  seeAnswerButtonSection.classList.remove("display-none");
  cardBackAnswer.classList.add("display-none");
  seeQuestionButtonSection.classList.add("display-none");
};
