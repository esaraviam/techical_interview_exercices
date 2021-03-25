function multiplyWithoutSign(number, times) {
  let result = 0;
  let isPositive = Math.abs(times) === times && Math.abs(number) === number;

  for (let i = 0; i < Math.abs(times); i++) {
    result = isPositive ? result + number : result - number;
  }

  return result;
}

module.exports = multiplyWithoutSign;
