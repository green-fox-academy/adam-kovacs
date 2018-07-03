'use strict'

let candies = 900;
let lollypops = 3;
let speed = 0;
let candyRain = 0;
let stats = document.querySelector('.stats');

let handleButtons = (event) => {
  console.log(event);
  switch (event.target.className) {
    case 'create-candies':
      candies++;
      break;

    case 'buy-lollypops':
      if (candies >= 100) {
        candies -= 100;
        lollypops++;
        speed = Math.floor(lollypops / 10);
      }
      break;

    case 'candy-machine':
      candyRain++;
      break;
  }
  udpateHUD();
};

let udpateHUD = () => {
  stats.children[1].textContent = candies;
  stats.children[3].textContent = '';
  for (let i = 0; i < lollypops; i++) {
    stats.children[3].textContent += '🍭';
  }
  if (candyRain > 0) {
    stats.children[5].textContent = speed * (10 ** candyRain);
  } else {
    stats.children[5].textContent = speed;
  }
};

setInterval(() => {
  if (candyRain > 0) {
    candies += speed * (10 ** candyRain);
  } else {
    candies += speed;
  }
  udpateHUD();
}, 1000);


document.body.addEventListener('click', (event) => {
  handleButtons(event);
});

udpateHUD();


