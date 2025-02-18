const arr = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const final = [...new Set([...arr, ...arr2])];
console.log(final);
