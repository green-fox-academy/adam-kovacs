'use strict';

const jokeURL = 'http://www.api.icndb.com/jokes/random';
const target = document.querySelector('div');
const button = document.querySelector('button');

const getJoke = () => {
  fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(myJSON => addJoke(myJSON));
}

const addJoke = (response) => {
  const newChild = document.createElement('p');
  newChild.innerHTML = response.value.joke;
  target.appendChild(newChild);
}

button.addEventListener('click', (jokeURL) => {
  getJoke(jokeURL);
});
