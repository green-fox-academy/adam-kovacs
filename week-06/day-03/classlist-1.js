/* If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
If the first p has an 'apple' class, replace cat's content with 'dog'
Make apple red by adding a .red class
Make balloon less balloon-like */
'use strict'

let paragraphList = Array.from(document.querySelectorAll('p'));

if (paragraphList[3].className == 'dolphin') {
  document.querySelector('.apple').textContent = 'pear';
};

if (paragraphList[0].className = 'apple') {
  document.querySelector('.cat').textContent = 'dog';
}

document.querySelector('.apple').setAttribute('class', 'apple red');
paragraphList[1].setAttribute('class', '');