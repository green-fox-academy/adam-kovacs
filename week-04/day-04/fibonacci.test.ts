'use strict'

import {fibonacci} from './fibonacci';
import {test} from 'tape';
import { err } from './fibonacci';

'use strict';

test('testing string', t => {
  t.deepEqual(fibonacci('sos'), err);
  t.end();
});

test('testing positive integer', t => {
  t.deepEqual(fibonacci(5), 3);  
  t.end();
});

test('testing negative integer', t => {
  t.equal(fibonacci(-3), err);
  t.end();
});

test('testing float', t => {
  t.equal(fibonacci(0.2526), err);
  t.end();
});