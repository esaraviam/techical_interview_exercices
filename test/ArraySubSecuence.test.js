const isValidSubsecuence = require('../ArraySubSequence.js');
describe('Array SubSequence', () => {
  test('should return a boolean', () => {
    const expected = true;
    const result = isValidSubsecuence([], []);
    expect(result).toBe(expected);
  });
  test(' Should return true if both arrays are equals', () => {
    const array = [];
    const secuence = [];
    const expected = true;
    const result = isValidSubsecuence(array, secuence);
    expect(result).toBe(expected);
  });

  test('should return false if the length of the secuence array is grather than lenngth of base array', () => {
    const array = [1, 3];
    const secuence = [1, 2, 3];
    const expected = false;
    const result = isValidSubsecuence(array, secuence);
    expect(result).toBe(expected);
  });

  test('Should return true', () => {
    const array = [1, 2, 3, 4];
    const secuence = [1, 3, 4];
    const expected = true;
    const result = isValidSubsecuence(array, secuence);
    expect(result).toBe(expected);
  });

  test('Should return false secuence was not ordered', () => {
    const array = [1, 2, 3, 4];
    const secuence = [4, 2];
    const expected = false;
    const result = isValidSubsecuence(array, secuence);
    expect(result).toBe(expected);
  });
  test('should Return true passing the test array', () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const secuence = [1, 6, -1, 10];
    const expected = true;
    const result = isValidSubsecuence(array, secuence);
    expect(result).toBe(expected);
  });
});
