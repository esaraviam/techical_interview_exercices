const fizzBuzz = require('../FizzBuzz.js');
describe('FizzBuzz Suite Test', () => {
  test('should print ok', () => {
    const expected = 'ok';
    const result = 'ok';
    expect(expected).toBe(result);
  });

  test('should return fizz if number is multiple of 3', () => {
    const expected = 'fizz';
    const result = fizzBuzz(6);
    expect(expected).toBe(result);
  });
});
