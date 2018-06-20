/* Write the image's url to the console.
Replace the image with a picture of your favorite animal.
Make the link point to the Green Fox Academy website.
Disable the second button.
Replace its text with 'Don't click me!'.*/
'use strict'

console.log(document.querySelector('img').src);
document.querySelector('img').src = 'https://i.ytimg.com/vi/Eo50ctoOTWs/maxresdefault.jpg';
document.querySelector('a').href='https://www.greenfoxacademy.com/';
document.querySelector('.this-one').disabled = true;
document.querySelector('.this-one').textContent = 'Don\'t click me!';