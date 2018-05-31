'use strict';

import { test } from 'tape';
import { err } from './extension'
import { add, maxOfThree, median, isVowel, translate } from './extension';

//Testing the add function
test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('add: 6 and 4 is 10', function (t: any): any {
  t.equal(add(6, 4), 10);
  t.end();
});

test('add: string returns error', function (t: any): any {
  t.equal(add('fail the test boii'), err);
  t.end();
});

test('add: void returns error', function (t: any): any {
  t.equal(add(), err);
  t.end();
});


//Testing the max of three function
test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('max of three: second', function (t: any): any {
  t.equal(maxOfThree(-3, 6, 5), 6);
  t.end();
});

test('max of three: multiple same numbers', function (t: any): any {
  t.equal(maxOfThree(-3, -3, -3), -3);
  t.end();
});

test('max of three: input is not a number', function (t: any): any {
  t.equal(maxOfThree(false, NaN, 'ka'), err);
  t.end();
});



//Testing the median function
test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('median: three', function (t: any): any {
  t.equal(median([1, 2, 3]), 2);
  t.end();
});

test('median: inputs are not numbers', function (t: any): any {
  t.equal(median([true, undefined, NaN, 'kek']), err);
  t.end();
});

test('max of three: input is not an array', function (t: any): any {
  t.equal(maxOfThree('not an array'), err);
  t.end();
});





test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});