function isPalindorme(phrase) {
  return (
    phrase.toLowerCase() === phrase.split('').reverse().join('').toLowerCase()
  );
}

console.log(isPalindorme('ana Ana'));
