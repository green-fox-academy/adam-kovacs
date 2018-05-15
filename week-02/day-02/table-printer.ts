'use strict';
export { };
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key
let ingredients: any[] = [
  { name: 'vodka', in_stock: 1, needs_cooling: true },
  { name: 'coffee_liqueur', in_stock: 0, needs_cooling: true },
  { name: 'fresh_cream', in_stock: 1, needs_cooling: true },
  { name: 'captain_morgan_rum', in_stock: 2, needs_cooling: true },
  { name: 'mint_leaves', in_stock: 0, needs_cooling: false },
  { name: 'sugar', in_stock: 0, needs_cooling: false },
  { name: 'lime juice', in_stock: 0, needs_cooling: true },
  { name: 'soda', in_stock: 0, needs_cooling: true }
];

function tablePrinter(arr) {
  let rows = '+--------------------+---------------+----------+';
  let width = [20, 15, 10];
  let columns = ['', '', ''];

  arr.forEach(element => {
    let objArray = [];

    for (let key in element){
      objArray.push(key)
    }
    
    for (let i: number = 0; i < objArray.length; i++) {
      for (let j: number = 0; j < width[i] - element[objArray[i]] - 1; j++) {
        columns[i] += ' ';
      }
    }
    console.log(`| ${element.name}${columns[0]}| ${element.in_stock}${columns[1]}| ${element.needs_cooling}${columns[2]}|`);

    console.log(columns[0].length);
    console.log(columns[1].length);
    console.log(columns[2].length);
    
    columns = ['', '', ''];
    
  });

}

tablePrinter(ingredients);