"use strict";

//buttons
const seeAnswerButton = document.querySelector(".card__front-button-section");
const seeQuestionButton = document.querySelector(".card__back-button-section");

//card side selectors
const cardFront = document.querySelector(".card__front");
const cardBack = document.querySelector(".card__back");

seeAnswerButton.onclick = () => {
  cardFront.classList.add("display-none");
  cardBack.classList.remove("display-none");
};

seeQuestionButton.onclick = () => {
  cardFront.classList.remove("display-none");
  cardBack.classList.add("display-none");
};

let colorArray = document.getElementsByClassName("color");
// console.log(colorArray);

for (var i = 0; i < colorArray.length; i++) {
  colorArray[i].onclick = function(e) {
    let targetClassString = e.target.classList.value;
    let classList = targetClassString.split(" ");
    let chosenColor = classList[1];
    document.body.style.background = chosenColor;
  };
}
