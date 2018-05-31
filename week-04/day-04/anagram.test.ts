'use strict'

import {test} from 'tape';
import {anagram} from './anagram';

test('testing with anagram strings', t=> {
  t.equal(anagram('add', 'dad'), true);
  t.end();
});

test('testing with random strings', t=> {
  t.equal(anagram('i am lord voldemort', 'he who must not be named'), false);
  t.end();
});

test('testing with different numbers', t=> {
  t.equal(anagram(3, 5), false);
  t.end();
});


test('testing with similar numbers', t=> {
  t.equal(anagram(3, 3), false);
  t.end();
});

test('testing with undefined', t=> {
  t.equal(anagram(), false);
  t.end();
});
