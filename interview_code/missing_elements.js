const arr = [1, 2, 4, 5, 8, 9, 10];

const min = Math.min(...arr);
const max = Math.max(...arr);
const ans = [];
for (let i = min; i < max; i++) {
  if (arr.indexOf(i) == -1) {
    ans.push(i);
  }
}

console.log(ans);
