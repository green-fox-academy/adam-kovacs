'use strict'

const form = document.querySelector('form');
const genreDropDown = document.querySelector('.genre');
const genreArray = document.querySelector('.genre').children;
const moviesArray = document.querySelector('.movies');

function checkMovieList() {
  Array.from(genreArray).forEach(genre => {
    if (genre.selected) {
      Array.from(moviesArray).map(movie => {
        console.log(movie.className, genre.value);
        if (movie.className.indexOf(genre.value) === -1) {
          movie.style = "display: none";
        } else {
          movie.style = "display: block";
        }
      });
    }
  });
}

function injectMovieTitle() {
  Array.from(moviesArray).forEach(movie => {
    if (movie.selected && !movie.disabled) {
      document.querySelector('h3').textContent = movie.textContent;
    }
  })
}

genreDropDown.addEventListener('click', () => {
  checkMovieList();
});

moviesArray.addEventListener('click', ()=> {
  injectMovieTitle();
});
