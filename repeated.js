/** Given a text find the words repeated  */

// Result in a Order Quadratic
function repeatedWordsQuadraticSolution(phrase) {
  let result = [];
  Array.from(new Set(phrase.split(' '))).forEach((word) => {
    let acc = 1;
    phrase.split(' ').forEach((item) => word === item && acc++);
    acc > 1 && result.push({ word, repeated: acc });
  });
  return result;
}
// Result in Order Lineal
function repeateWordsLinealSolution(phrase) {
  let words = phrase.split(' ');
  let dic = new Map();

  for (let word of words) {
    let nomalizedWord = word.toLowerCase().replace(/[.,!]/g, '');
    if (dic.has(nomalizedWord)) {
      let oldValue = dic.get(nomalizedWord);
      dic.set(nomalizedWord, ++oldValue);
    } else {
      dic.set(nomalizedWord, 1);
    }
  }
  return dic;
}
