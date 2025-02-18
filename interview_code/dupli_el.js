const arr = [1, 2, 8, 2, 5, 6, 6];

const duplicateElements = arr.filter((el, i) => arr.lastIndexOf(el) !== i); // can also use indexof
// O(n^2)

console.log(duplicateElements); // [2,6]

let i, j;

// another way
// o(n) time complexity

const seen = new Set();

const dupli = new Set();

arr.forEach((el, i) => {
  if (seen.has(el)) {
    dupli.add(el);
  } else {
    seen.add(el);
  }
});

console.log([...dupli]);
