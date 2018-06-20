/* 1) replace the list items' content with items from this list:
['apple', 'banana', 'cat', 'dog']
2) change the <ul> element's background color to 'limegreen'
- use css class to change the color instead of the style property */
'use strict'

document.querySelectorAll('li').forEach((item, i) => {
  item.textContent = ['apple', 'banana', 'cat', 'dog'][i];
})

document.querySelector('ul').setAttribute('class', 'limegreen');
