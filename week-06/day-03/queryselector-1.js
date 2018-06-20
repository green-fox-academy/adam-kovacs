/* 1. store the element that says 'The King' in the 'king' variable.
console.log it.
2. store 'The Businessman' and 'The Lamplighter'
in the 'businessLamp' variable.
console.log each of them.
3. store 'The King' and 'The Conceited Man'
in the 'conceitedKing' variable.
alert them one by one.
4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
in the 'noBusiness' variable.
console.log each of them. */
'use strict'

let king = document.querySelector('#b325');
console.log(king);

let businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(element => {
  element = element.textContent;
  console.log(element);
});

let conceitedKing = Array.from(document.querySelectorAll('div'));
conceitedKing.forEach((element, i) => {
  if (element.className == 'asteroid' || element.className == 'asteroid b326') {
    element = element.textContent;
    alert(element);
} else {
  conceitedKing.splice(i, 1);
}
});

let noBusiness = Array.from(document.querySelectorAll('div'));
noBusiness.forEach((element, i) => {
  if (element.className == 'asteroid big') {
    noBusiness.splice(i, 1);
  } else {
    element = element.textContent;
    console.log(element);
  }
});
