/*Is Unique: Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures? */

function isUnique(str) {
  let splitString = str.split('');
  let unique = Array.from(new Set(splitString));
  return unique.length === splitString.length;
}

const test = isUnique('aaaaaaaaaa');
console.log(test);
