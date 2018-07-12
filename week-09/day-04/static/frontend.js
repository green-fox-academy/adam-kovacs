'use strict';

const scoreCount = document.querySelector('#score')
const questionText = document.querySelector('#questiontext');
const buttonsArray = Array.from(document.querySelector('#buttons').children);

let buttonsInactive = true;
let score = 0;
let questionID = 0;

function incrementScore() {
  score++;
  scoreCount.textContent = `SCORE: ${score}`;
};

function getCorrect(button) {
  if (!buttonsInactive) {
    buttonsInactive = true;
    fetch(`http://localhost:3000/evaluate`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      body: `id=${questionID}`
    })
    .then(responseStream => {
      return responseStream.json();
    })
      .then(answerID => {
        checkAnswer(parseInt(button.id), parseInt(answerID.id));
      })
  }
};

function updateMain(questionObject) {
  questionText.textContent = questionObject.question;
  buttonsArray.forEach((button, i) => {
    button.textContent = questionObject.answers[i].answer;
    button.id = questionObject.answers[i].id;
    button.className = '';
  });
  questionID = questionObject.id;
}

function checkAnswer(selectedID, answerID) {
  buttonsArray.forEach(button => {
    let buttonID = parseInt(button.id);
    if (buttonID === selectedID) {
      button.className = 'selected_wrong';
    }
    if (buttonID === answerID && buttonID === selectedID) {
      button.className = 'selected_right';
      incrementScore()
    }
    setTimeout(() => newQuestion(), 1000);
  });
}

function newQuestion() {
  fetch('http://localhost:3000/game')
  .then(responseStream => {
    return responseStream.json();
  })
  .then(questionObject => {
    updateMain(questionObject)
  })
  .then(() => {
    if (buttonsInactive) {
      activateButtons();
    }
  })
}

function activateButtons() {
  buttonsArray.forEach(button => {
    button.addEventListener('click', () => getCorrect(button));
  });
  buttonsInactive = false;
}

window.onload = newQuestion();