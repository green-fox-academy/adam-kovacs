'use strict'

//
const picData = [
  { title: "Welcome to Cyberpunk", story: "lorem ipsum", src: "static/red-chinese.jpg" },
  { title: "Abstract", story: "lorem ipsum", src: "static/abstract.png" },
  { title: "Seattle Streets", story: "lorem ipsum", src: "static/cp-street.jpg" },
  { title: "Heoi Suburb", story: "lorem ipsum", src: "static/heoi.jpg" },
  { title: "Hotel Marina", story: "lorem ipsum", src: "static/hotel-marina.jpg" },
  { title: "Chinese Neon", story: "lorem ipsum", src: "static/neon.jpg" },
  { title: "New Shanghai", story: "lorem ipsum", src: "static/new-shanghai.jpg" },
  { title: "Red Sky", story: "lorem ipsum", src: "static/red-sky.png" },
];

let currentPic = 0;
let buttonArray = document.querySelectorAll('.navbutton');
let mainView = document.querySelector('#picture');
let storyBlock = document.querySelector('#story');
let tnContainer = document.querySelector('#thumbnail-container');

function updateMain() {
  console.log(currentPic);
  Array.from(tnContainer.children).forEach((element, i) => {
    if (i !== currentPic) {
      element.setAttribute('class', 'thumbnail');
    } else {
      element.setAttribute('class', 'thumbnail selected');
    }
  });
  mainView.setAttribute('src', picData[currentPic].src);
  storyBlock.innerHTML = `<h1>${picData[currentPic].title}</h1>${picData[currentPic].story}`;
}

function thumbnailClicked(id) {
  currentPic = id;
  updateMain();
}

picData.forEach((element, id) => {
  let newDiv = document.createElement('div');
  let newImg = document.createElement('img');
  newDiv.setAttribute('class', 'thumbnail');
  newDiv.setAttribute('id', id);
  newImg.setAttribute('class', 'tnImage');
  newImg.setAttribute('src', element.src);
  tnContainer.appendChild(newDiv);
  newDiv.appendChild(newImg);
  newDiv.onclick = () => {
    thumbnailClicked(parseInt(newDiv.id));
  }
});

buttonArray[0].onclick = () => {
  if (currentPic === 0) {
    currentPic = picData.length - 1;
  } else {
    currentPic--;
  }
  updateMain()
};

buttonArray[1].onclick = () => {
  if (currentPic === picData.length - 1) {
    currentPic = 0;
  } else {
    currentPic++;
  }
  updateMain();
};

updateMain();
