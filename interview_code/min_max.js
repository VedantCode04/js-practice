const arr = [10001, 2, 3, 4, 5, 0, -10];

console.log(Math.min(...arr)); // 1
console.log(Math.max(...arr)); // 5

// other way

let min = Infinity,
  max = -Infinity;

arr.forEach((el, i) => {
  if (el > max) {
    max = el;
  }
  if (el < min) {
    min = el;
  }
});

console.log(min, " ", max);
