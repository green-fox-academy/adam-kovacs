import {Thing} from "./thing";
import {Fleet} from "./fleet";

//* create a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */

let fleet = new Fleet();

let t1 = new Thing('Get milk');
fleet.add(t1);
let t2 = new Thing('Remove the obstacles');
fleet.add(t2);
let t3 = new Thing('Stand up');
t3.complete();
fleet.add(t3);
let t4 = new Thing('Eat lunch');
t4.complete();
fleet.add(t4);

fleet.print();