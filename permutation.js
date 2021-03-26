/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 * A Permutation of a string is another string that contains same characters, only the order of characters can be different. For example, “abcd” and “dabc” are Permutation of each other.
 *
 */

function checkPermutation(firstString, secondString) {
  if (firstString.length !== secondString.length) return false;
  let flag = true;
  const fsMap = new Map();

  const fsa = Array.from(firstString);
  const sca = Array.from(secondString);

  fsa.forEach((item) => {
    fsMap.set(item, 1);
  });
  return sca.every((item) => fsMap.has(item));
}

console.log(checkPermutation('123', '213'));
