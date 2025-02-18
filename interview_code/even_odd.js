const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, el) => {
  return acc + el;
}, 0);

console.log(sum);
