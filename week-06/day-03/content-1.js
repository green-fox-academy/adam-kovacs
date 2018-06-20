/* fill every paragraph with the last one's content.
fill every paragraph with the last one's content keeping the cat strong.*/
'use strict'

document.querySelectorAll('p').forEach(paragraph => {
  paragraph.innerHTML = document.querySelectorAll('p')[document.querySelectorAll('p').length-1].innerHTML;
});