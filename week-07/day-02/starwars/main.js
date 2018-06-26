'use strict'

console.log('script started')
const form = document.querySelector('form')
console.log(form);
const charaList = document.querySelector('#chara-list');
let charaInput;

let processInput = () => {
  console.log('input processed')
  charaInput = document.querySelector('#chara-input')
    .value
    .toLowerCase()
    .split(' ')
    .join('+');
}

let getCharaPage = (pageCount) => {
  const charaRequest = new XMLHttpRequest;
  console.log(`start getting page #${pageCount}`)

  charaRequest.onload = () => {
    if (charaRequest.status === 200 && charaRequest.readyState === 4) {
      addListElements(JSON.parse(charaRequest.response).results)
      if (JSON.parse(charaRequest.responseText).next) {
        getCharaPage(pageCount + 1);
      }
    }
  };
  charaRequest.open('GET', `https://swapi.co/api/people/?page=${pageCount}&search=${charaInput}`);
  charaRequest.send('null');
}

let addListElements = (charaResponseList) => {
  charaResponseList.forEach(element => {
    let newChild = document.createElement('li');
    newChild.className = "character";
    newChild.textContent = element.name;
    charaList.appendChild(newChild);
  });
}

form.addEventListener('submit', function (event) {
  while (charaList.firstChild) {
    charaList.removeChild(charaList.firstChild);
  }
  event.preventDefault();
  console.log('submitted');
  processInput()
  console.log(`input: ${charaInput}`);
  getCharaPage(1);

});
