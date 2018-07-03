'use strict'

let button = document.querySelector('button');
let clickCount = 0;
let buttonIsLive = true;

let killButton = () => {
  buttonIsLive = false;
};

button.addEventListener('click', killButton);

window.onload = () => {
  setTimeout(() => {
    button.removeEventListener('click', killButton);
    if (buttonIsLive) {
      console.log('5s passed');
      button.addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 3) {
          document.querySelector('h1').textContent = '5 seconds elapsed and clicked 3 times';
        }
      });
    }
  }, 5000);
};