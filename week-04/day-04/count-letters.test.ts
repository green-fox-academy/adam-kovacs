'use strict';

import { test } from 'tape';
import { err } from './count-letters';
import { countLetters } from './count-letters';

test('testing simple character string', t => {
  let obj: Object = { 's': 1 }; 
  t.deepEqual(countLetters('s'), obj);
  t.end();
});

test('testing multiple character string', t => {
  let obj: Object = { 's': 2, 'o': 1 }; 
  t.deepEqual(countLetters('sos'), obj);
  t.end();
});

test('testing multiple character string with spaces', t => {
  let obj: Object = { 's': 2, ' ': 2, 'o': 1 }; 
  t.deepEqual(countLetters('s o s'), obj);  
  t.end();
});

test('testing numbers', t => {
  t.equal(countLetters(324), err);
  t.end();
});

test('testing void', t => {
  t.equal(countLetters(), err);
  t.end();
});