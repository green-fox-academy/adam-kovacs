class Domino {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
}

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });    
}

function sortDominoes(dominoes: Domino[]) {
  let sortedDominoes = [];
  sortedDominoes.push(dominoes[0]);
  for (let i: number = 0; i < dominoes.length; i++) {
    for (let j: number = 1; j < dominoes.length; j++) {        
      if (dominoes[j].values[0] === sortedDominoes[i].values[1]){
        sortedDominoes.push(dominoes[j]);
      }
    }
  }
  return sortedDominoes;
}

let dominoes = initializeDominoes();

print(sortDominoes(dominoes));