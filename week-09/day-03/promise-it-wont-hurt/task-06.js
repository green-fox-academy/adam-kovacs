'use strict';

let promise = new Promise((resolve, reject) => {
  reject(new Error('SECRET VALUE'));
}).catch(console.log);

Promise.resolve('SECRET VALUE');

Promise.reject(new Error('SECRET VALUE'));
