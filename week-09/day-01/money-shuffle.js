'use strict';

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash += amt;
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash += amt;
  }
}

const Shuffler = {
  cash: 10000,
  pick: function() {
    if (Math.floor(Math.random() * 2)) {
      Cyprus.deposit(1000);
      console.log(`${Cyprus.name} got 1000`)
    } else {
      Panama.deposit(1000);
      console.log(`${Panama.name} got 1000`)
    }
  }
};

Shuffler.pick();
Shuffler.pick();
Shuffler.pick();
Shuffler.pick();

console.log(Panama.cash);
console.log(Cyprus.cash);