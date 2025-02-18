const set = new Set(["a", "e", "i", "o", "u"]);

let str = "vedant is a good person";
let ans = new Set();
[...str].forEach((el) => {
  if (set.has(el)) {
    ans.add(el);
  }
});

console.log(...ans);
