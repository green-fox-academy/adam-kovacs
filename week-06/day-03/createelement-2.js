/* Remove the king from the list.
Fill the list based on the following list of objects.
Only add the asteroids to the list.
Each list item should have its category as a class and its content as text content. */
'use strict'

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

document.querySelector('ul').removeChild(document.querySelectorAll('li')[0]);
planetData.forEach(element => {
  if (element.asteroid === true) {
    let newChild = document.createElement('li');
    newChild.setAttribute('class', element.category);
    newChild.textContent = element.content;
    document.querySelector('ul').appendChild(newChild);
  }
})
