'use strict';

function timedOut() {
  console.log('TIMED OUT!');
}

setTimeout(() => {
  timedOut();
}, 300);
