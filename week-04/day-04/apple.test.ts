'use strict';

import {test} from 'tape';
import {Apple} from './apple';

test('test Apple return value', t => {
  let apple = new Apple;
  t.equal(apple.getApple(), 'apple');
  t.end();
})