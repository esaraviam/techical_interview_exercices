function esMultiploDe(number, evalNumber) {
  return number % evalNumber === 0;
}

function fizzBuzz(number) {
  if (esMultiploDe(number, 3) && esMultiploDe(number, 5)) return 'fizzbuzz';
  if (esMultiploDe(number, 3)) return 'fizz';
  if (esMultiploDe(number, 5)) return 'buzz';
  return number;
}

module.exports = fizzBuzz;
