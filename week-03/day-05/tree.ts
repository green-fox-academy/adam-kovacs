'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight

let animated: string = window.prompt('Do you want it to be infinitely animated? Y/N', 'Y');

if (animated === 'N') {
  let maxDepth: number = parseInt(window.prompt('Enter fractal depth', '5'));
  if (!(maxDepth >= 1 && maxDepth <= 11)) {
    let alert = window.alert('Invalid entry.\r\nPlease enter a number between 1 and 11.');
    maxDepth = 5;
  }
} else {
  let maxDepth = 5;
}

let depth: number = 0;
let startß: number = (20) * Math.PI / 180; //The angle of one declination
let ß: number = 0;
let l: number = canvas.height / (maxDepth + 6);


ctx.fillStyle = 'rgb(10,10,90)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

//#####  LINE CLASS  ######
class Line {
  private color: string;
  length: number;

  constructor() {
    let colorFill = Math.random() * 60
    this.color = `rgb(${colorFill + 170}, ${colorFill * 20 + 130}, 130)`;
    this.length = (maxDepth - 0.2 * depth) / maxDepth * l;
  }

  draw(x1: number, y1: number, x2: number, y2: number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

//#####  MAIN DRAWING FUNCTION  ######
function drawBranch(x1: number, y1: number, dir: number, ß: number, x0?: number, y0?: number) {
  let line = new Line();
  let x2: number;
  let y2: number;
  let dX: number;
  let dY: number;

  depth++;
  if (depth > maxDepth) {
    depth--;
    return
  } else if (depth === 1) {

    line.draw(x1, y1, x0, y0);
    x2 = x0;
    y2 = y0;
  }

  switch (dir) {
    case -1:
      ß -= startß;
      break;
    case 1:
      ß += startß;
      break;
  }
  dX = Math.sin(ß) * line.length;
  dY = Math.cos(ß) * line.length;
  x2 = x1 + dX;
  y2 = y1 - dY;
  line.draw(x1, y1, x2, y2);


  if (animated === 'Y') {
      setTimeout(() => {drawBranch(x2, y2, -1, ß);}, 600);
      setTimeout(() => {drawBranch(x2, y2, 0, ß);}, 600);
      setTimeout(() => {drawBranch(x2, y2, 1, ß);}, 600);
  } else {
    drawBranch(x2, y2, -1, ß);
    drawBranch(x2, y2, 0, ß);
    drawBranch(x2, y2, 1, ß);
  }

  depth--;
  return
}

drawBranch(canvas.width / 2, canvas.height, 0, 0, canvas.width / 2, canvas.height - l);