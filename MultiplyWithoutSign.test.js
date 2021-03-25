const multiplyWithoutSign = require('./MultiplyWithoutSign');
describe('Multiply numbers whithout multiply sign', () => {
  test('should return the correct result', () => {
    const expected = 25;
    const result = multiplyWithoutSign(5, 5);
    expect(result).toBe(expected);
  });
  test('should return correct result when the it pass a negative number', () => {
    const expected = 25;
    const result = multiplyWithoutSign(-5, 5);
    expect(result).toBe(expected);
  });
  test('should return correct result when the it pass a negative times', () => {
    const expected = -25;
    const result = multiplyWithoutSign(5, -5);
    expect(result).toBe(expected);
  });

  test('should return zero if any argument is zero', () => {
    const expected = 0;
    const result = multiplyWithoutSign(0, 0);
    expect(result).toBe(expected);
  });
});
