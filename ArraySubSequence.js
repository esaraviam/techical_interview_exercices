/* 

  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers form a subsequence of the array
  

 [1, 3, 4]form a subsequence of the array [1, 2, 3, 4], and so do the numbers <span>[2, 4]</span>. 
 Note: that a single number in an array and the array itself are both valid
  subsequences of the array.


  */

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
