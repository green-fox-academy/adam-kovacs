/* Add an item that says 'The Green Fox' to the asteroid list.
Add an item that says 'The Lamplighter' to the asteroid list.
Add a heading saying 'I can add elements to the DOM!' to the .container.
Add an image, any image, to the container. */
'use strict'

let greenFox = document.createElement('li');
let lampLighter = document.createElement('li');
let axolotl = document.createElement('img');

greenFox.textContent = 'The Green Fox';
lampLighter.textContent = 'The Lamplighter';
axolotl.setAttribute('src', 'https://i.imgur.com/5UXUPoy.gif');

document.querySelector('ul').appendChild(greenFox, lampLighter);
document.querySelector('.container').innerHTML = '<h1>I can add elements to the DOM!</h1>';
document.querySelector('.container').appendChild(axolotl);

