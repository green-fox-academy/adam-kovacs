'use strict'

const picData = [
  { title: "Welcome to Cyberpunk", story: "loremlllllllllllllllllllll llllllllllllllllll llllllllllllll llllllllllllllll lll l lll ll llllllllllllllllllll llllllllllllllll llllllaaaaaa aaa aaaaaa aaaaa aaaaa aaaaaa aaaaaaaa a aa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaa aaaa aa aaaaaaaa aaaaa aa aa aaaa aaa", src: "static/red-chinese.jpg" },
  { title: "Abstract", story: "lorem", src: "static/abstract.png" },
  { title: "Seattle Streets", story: "lorem", src: "static/cp-street.jpg" },
  { title: "Heoi Suburb", story: "lorem", src: "static/heoi.jpg" },
  { title: "Hotel Marina", story: "lorem", src: "static/hotel-marina.jpg" },
  { title: "Chinese Neon", story: "lorem", src: "static/neon.jpg" },
  { title: "New Shanghai", story: "lorem", src: "static/new-shanghai.jpg" },
  { title: "Red Sky", story: "lorem", src: "static/red-sky.png" },
];

let currentPic = 0;
let buttonArray = document.querySelectorAll('.navbutton');
let mainView = document.querySelector('#picture');
let storyBlock = document.querySelector('#story');
let tnContainer = document.querySelector('#thumbnail-container');

function updateMain() {
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
