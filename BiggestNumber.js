function BiggestNumber(numberList) {
  numberList.reduce((acc, el) => {
    console.log(acc, el);
  });
  if (numberList && numberList.length > 0) {
    return numberList.sort((a, b) => b - a)[0];
  } else {
    return 'You must add a valid array';
  }
}

module.exports = BiggestNumber;
