function clean(arr) {
  return arr.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }
    return acc;
  }, []);
}

let c = clean2([1, undefined, null, 0, 3]);
console.log(c);
