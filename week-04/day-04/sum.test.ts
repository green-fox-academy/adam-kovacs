'use strict';

import { test } from 'tape';
import { Summer } from './sum'

test('testing sum with several values', t => {
  let list: number[] = [0, 2, 4, 6, 8];
  let summable = new Summer(list);
  t.equal(summable.sum(), 20);
  t.end();
});

test('testing sum with empty list', t => {
  let summable = new Summer([]);
  t.equal(summable.sum(), 0);
  t.end();
});

test('testing sum with one element list', t => {
  let summable = new Summer([3]);
  t.equal(summable.sum(), 3);
  t.end();
});

test('testing sum with multiple element list', t => {
  let summable = new Summer([3, 6, 9]);
  t.equal(summable.sum(), 18);
  t.end();
});

test('testing sum with null', t => {
  let summable = new Summer(null);
  t.equal(summable.sum(), summable.invalidEntry);
  t.end();
});

test('testing sum with string', t => {
  let str = 'yo';
  let summable = new Summer(str);
  t.equal(summable.sum(), summable.invalidEntry);
  t.end();
});
