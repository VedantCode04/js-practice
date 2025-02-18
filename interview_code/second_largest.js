const arr = [10, 1, 2, 3, 100];
const max = Math.max(...arr);
const secondmax = Math.max(...arr.filter((el) => el !== max));
console.log(secondmax);

// other way

const second = [...new Set(arr)].sort((a, b) => b - a)[1];

console.log(second);
