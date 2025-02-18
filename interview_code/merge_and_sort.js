const arr = [9, -10, 1, 2, 4];
const arr2 = [5, 6, 7];

// final  =arr.concat(arr2)
const final = [...arr, ...arr2];
final.sort((a, b) => a - b);

console.log(final);
