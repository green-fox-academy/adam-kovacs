'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
let strokeCount: number = '12';

function drawSquare (a) {
  ctx.strokeRect(300 - a / 2, 200 - a / 2, a, a);
}

for (let i: number = 1; i < 4; i++) {
  drawSquare(i * 40);
}