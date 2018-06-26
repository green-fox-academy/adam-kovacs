'use strict'

let httpRequest = new XMLHttpRequest();
let data;
let picData = [];
let currentPic = 0;
let buttonArray = document.querySelectorAll('.navbutton');
let mainView = document.querySelector('#picture');
let storyBlock = document.querySelector('#story');
let tnContainer = document.querySelector('#thumbnail-container');

httpRequest.onreadystatechange = () => {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    data = JSON.parse(httpRequest.responseText).data;
    console.log(data);
    data.forEach(element => {
      picData.push({
        title: element.title,
        story: element.bitly_gif_url,
        src: element.images.original.url,
      });
    });
    createGallery();

  } else {
    console.log(`Connection status: ${httpRequest.status}`);
  }
};

httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=harry+potter&api_key=LEHNn2GALlbPjisNGCIaqr5vZxbF9LZA&limit=10"', true);
httpRequest.send(null);

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

function createGallery() {
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
  updateMain();
}

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
