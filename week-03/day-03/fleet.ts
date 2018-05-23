import {Thing} from "./thing";

class Fleet {
    private things: Thing[] = [];

    constructor(){}

    add(thing: Thing){
        this.things.push(thing);
    }

    print() {
      let out: string = '';
      for (let i: number = 0; i < this.things.length; i++) {
        if (this.things[i].getComplete() === true) {
        out += `${i + 1}. [x] ${this.things[i].getName()}\r\n`
      } else {
        out += `${i + 1}. [ ] ${this.things[i].getName()}\r\n`
      }
      }
      console.log(out)
    }
}

export {Fleet};