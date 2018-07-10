'use strict';

let promise = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
}).then(result => {
  console.log(result);
  return (result);
}).catch(error => {
  onRejected(error);
  return(error);
});

function onRejected(error) {
  console.log(error.message);
};
