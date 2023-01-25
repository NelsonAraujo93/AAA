const stringLength = require('./stringLength.js');
const stringReverse = require('./stringReverse.js');
const Calculator = require('./calculator.js');
const stringCapitalize = require('./stringCapitalize.js');

test('String length test(hello) expected 5', () => {
  expect(stringLength('hello')).toBe(5);
});

test('String length test(hello my friends) expected "error"', () => {
  expect(stringLength('hello my friends')).toBe('error');
});

test('String length test() expected "error"', () => {
  expect(stringLength('')).toBe('error');
});

test('String reverse test(This is a reverse text) expected "txet esrever a si sihT"', () => {
  expect(stringReverse('This is a reverse text')).toBe('txet esrever a si sihT');
});

describe('Calculator', () => {
  const calc = new Calculator();
  test('addition 6 + 3 expected 9', () => {
    expect(calc.add(6, 3)).toBe(9);
  });

  test('subtraction 6 - 3 expected 3', () => {
    expect(calc.subtract(6, 3)).toBe(3);
  });

  test('division 6 / 3 expected 2', () => {
    expect(calc.divide(6, 3)).toBe(2);
  });

  test('miltiplication 6 * 3 expected 18', () => {
    expect(calc.multiply(6, 3)).toBe(18);
  });
});

test('String capitalize test(turkey) expected "Turkey"', () => {
  expect(stringCapitalize('turkey')).toBe('Turkey');
});
