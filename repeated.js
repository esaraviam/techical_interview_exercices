function repeatedWords(phrase) {
  let result = [];
  Array.from(new Set(phrase.split(' '))).forEach((word) => {
    let acc = 1;
    phrase.split(' ').forEach((item) => word === item && acc++);
    acc > 1 && result.push({ word, repeated: acc });
  });

  //   let result = [];
  //   for (let i = 0; i < uniqueWords.length; i++) {
  //     let word = pArray[i];
  //     let acc = 1;
  //     for (let j = 0; j < pArray.length; j++) {
  //       if (word === pArray[j]) {
  //         acc++;
  //       }
  //     }
  //     if (acc > 1) {
  //       result.push({ word, acc });
  //     }
  //   }
  console.log(result);
}

repeatedWords(
  'tres tristes tigres tres tigres tres tigres tres tigres trigo trillado trigo trillado trigo trillado trigo trillado tragaban en un trigal'
);
