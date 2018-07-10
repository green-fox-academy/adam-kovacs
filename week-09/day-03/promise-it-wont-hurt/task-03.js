'use strict';

let myError = new Error('REJECTED!');

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(myError, 300));
}).then((error) => {
  onReject(error);
});

function onReject(error) {
  console.log(error.message);
}
