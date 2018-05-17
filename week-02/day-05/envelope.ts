'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//DO NOT TOUCH ANYTHING ABOVE... 
//Well okay it doesn't really matter now
//Do the Envelope!

let i: number;
let stroke: number = 32;
let cw: number = canvas.width / 2;
let ch: number = canvas.height / 2;

function envelope(color) {
  ctx.strokeStyle = color;
  for (var i: number = 0; i < stroke + 1; i++) {
    ctx.beginPath();
    ctx.moveTo(cw, ch - i * (ch / stroke));
    ctx.lineTo(canvas.width - i * (cw / stroke), ch);
    ctx.stroke();
  }
  for (var i: number = 0; i < stroke + 1; i++) {
    ctx.beginPath();
    ctx.moveTo(canvas.width - i * (cw / stroke), ch);
    ctx.lineTo(cw, ch + i * (ch / stroke));
    ctx.stroke();
  }
  for (var i: number = 0; i < stroke + 1; i++) {
    ctx.beginPath();
    ctx.moveTo(cw, ch + i * (ch / stroke));
    ctx.lineTo(i * (cw / stroke), ch);
    ctx.stroke();
  }
  for (var i: number = 0; i < stroke + 1; i++) {
    ctx.beginPath();
    ctx.moveTo(i * (cw / stroke), ch);
    ctx.lineTo(cw, ch - i * (ch / stroke));
    ctx.stroke();
  }
}

envelope('green');

