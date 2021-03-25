function FlatArray(array) {
  return array.flat();
}
const result = FlatArray([[1, 2], [[3, 4]], [1, []]]);

console.log(result);
