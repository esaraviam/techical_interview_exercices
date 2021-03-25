function isValidSubsequence(array, sequence) {
  if (array === sequence) {
    return true;
  }
  if (array.length < sequence.length) {
    return false;
  }
  if (array.join('').includes(sequence.join(''))) {
    return true;
  }

  let flag = true;
  let foundIndexes = [];

  sequence.forEach((num, i) => {
    if (!array.includes(num)) {
      flag = false;
    } else {
      foundIndexes.push(array.indexOf(num));
    }
  });

  for (let i = 0; i < foundIndexes.length - 1; i++) {
    if (foundIndexes[i] >= foundIndexes[i + 1]) {
      flag = false;
    }
  }
  return flag;
}

const array = [1, 1, 1, 1, 1, 1];
const sequence = [1, 1, 1];

const result = isValidSubsequence(array, sequence);

console.log(result);

module.exports = isValidSubsequence;
