/* Turn the party on and off by clicking the button. (the whole page) */
'use strict'

document.querySelector('button').onclick = () => {
  if (document.querySelector('div').className !== 'party') {
    document.querySelector('div').setAttribute('class', 'party');
    console.log('on');
  } else {
    document.querySelector('div').removeAttribute('class')
    console.log('off');
  }
};