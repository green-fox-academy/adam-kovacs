'use strict'

const form = document.querySelector('form');
const iLoveCatsButton = document.querySelectorAll('input[type="submit"]')[0];
const signUpButton = document.querySelectorAll('input[type="submit"]')[1];
const petButtons = document.querySelectorAll('input[name="pet"]');
const catFactsButtons = document.querySelectorAll('input[name="catfacts"]');


function checkButtons(petButtons, catFactsButtons) {
  if (catFactsButtons[1].checked) {
    signUpButton.disabled = true;
  }
  if (petButtons[0].checked || petButtons[1].checked || catFactsButtons[0].checked) {
    signUpButton.disabled = false;
    addEventListener('submit', alertSuccess);
  }
  if (petButtons[2].checked) {
    signUpButton.disabled = true;
  }
  if (petButtons[2].checked && catFactsButtons[1].checked) {
    signUpButton.disabled = false;
    addEventListener('submit', alertViktor);
  }
};

function alertSuccess() {
  alert('Thank you, you\'ve successfully signed up for cat facts');
}

function alertViktor() {
  alert('Sigh, we still added you to the cat facts list');
}

function removeEventListeners(form) {
  form.removeEventListener('submit', alertSuccess);
  form.removeEventListener('submit', alertViktor);
}

form.addEventListener('click', () => {
  removeEventListeners(form);
  checkButtons(petButtons, catFactsButtons);
});
