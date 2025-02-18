const arr = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const ans = arr.filter((el) => arr2.indexOf(el) !== -1);

console.log(ans);
