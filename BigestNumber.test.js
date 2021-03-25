const BigestNumber = require('./BiggestNumber');
describe('Name of the group', () => {
  test('should return the bigest number', () => {
    const numberList = [1, 3, 5, 1, 44, 5, 6, 2, 3, 5, 8, 22];
    const expected = 44;
    const result = BigestNumber(numberList);
    expect(result).toBe(expected);
  });
  test('should return an error when and non array is passed as parameter ', () => {
    const numberList = 2;
    const expected = 'You must add a valid array';
    const result = BigestNumber(numberList);
    expect(result).toBe(expected);
  });
});
