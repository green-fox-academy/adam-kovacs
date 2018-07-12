'use strict';

const scoreCount = document.querySelector('#score')
const questionText = document.querySelector('#questiontext');
const buttonsArray = Array.from(document.querySelector('#buttons').children);
const buttonsInactive = true;

function incrementScore() {
  score++;
  scoreCount.textContent = `SCORE: ${score}`;
};

function getCorrect(button) {
  fetch(`http://localhost:3000/evaluate`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body: `id=${button.id}`
  })
    .then(answerID => {
      checkAnswer(button.id, answerID.id);
    })
};

function updateMain(questionObject) {
  questionText.textContent = questionObject.question;
  buttonsArray.forEach((button, i) => {
    button.textContent = questionObject.answers[i].answer;
    button.id = questionObject.id;
  });
}

function checkAnswer(selectedID, answerID) {
  buttonsArray.forEach(button => {
    if (button.id === answerID) {
      button.className = 'selected_right';
      incrementScore()
    }
    if (button.id === selectedID && button.id !== answerID) {
      button.className = 'selected_wrong';
    }
    setTimeout(() => newQuestion, 2000);
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
}

window.onload = newQuestion();