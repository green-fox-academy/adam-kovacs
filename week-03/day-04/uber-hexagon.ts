'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let maxDepth: number = parseInt(window.prompt('Enter fractal depth', '5'))
let depth: number = 0;

function drawUberHex(x: number, y: number, side: number): void {
  depth++;
  if (depth >= maxDepth) {
    depth--;
    return
  }

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + side, y);
  ctx.lineTo(x + side * 1.5, y + side * Math.sqrt(3) / 2);
  ctx.lineTo(x + side, y + side * Math.sqrt(3));
  ctx.lineTo(x, y + side * Math.sqrt(3));
  ctx.lineTo(x - side * 0.5, y + side * Math.sqrt(3) / 2);
  ctx.lineTo(x, y);
  ctx.stroke();

  drawUberHex(x, y, side / 2);
  drawUberHex(x + side * 0.75, y + Math.sqrt(3) / 4 * side, side / 2);
  drawUberHex(x, y + Math.sqrt(3) / 2 * side, side / 2);

  depth--;
  return
}

drawUberHex(canvas.width / 4, 0, canvas.width / 2);

