function repeatedWords(phrase) {
  let result = [];
  Array.from(new Set(phrase.split(' '))).forEach((word) => {
    let acc = 1;
    phrase.split(' ').forEach((item) => word === item && acc++);
    acc > 1 && result.push({ word, repeated: acc });
  });
  return result;
}

repeatedWords(
  'tres tristes tigres tres tigres tres tigres tres tigres trigo trillado trigo trillado trigo trillado trigo trillado tragaban en un trigal'
);
