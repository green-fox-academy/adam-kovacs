'use strict'

const form = document.querySelector('form');
const passToggleOne = document.querySelector('#passtoggle-1');
const passToggleTwo = document.querySelector('#passtoggle-2');

const passwordValidation = (event) => {
  const passwordOne = document.querySelector('#password-1').children[1];
  const passwordTwo = document.querySelector('#password-2').children[1];
  if (passwordOne.value != passwordTwo.value) {
    alert('Passwords doesn\'t match, please try again!');
    passwordOne.value = '';
    passwordTwo.value = '';
  } else {
    console.log('password ok');
  }
};

let addClickedClass = (element) => {
  element.children[2].addEventListener('mousedown', ()=> {
    element.children[2].className = 'clicked';
    element.children[1].type = 'text';
  });
  element.children[2].addEventListener('mouseup', ()=> {
    element.children[2].className = '';
    element.children[1].type = 'password';
  });
}

addClickedClass(document.querySelector('#password-1'));
addClickedClass(document.querySelector('#password-2'));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  passwordValidation(event);
});