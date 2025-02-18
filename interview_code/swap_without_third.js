let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, " ", b);

let c = 30,
  d = 40;

c = c + d; // 70
d = c - d; // 70 - 40
c = c - d; // 70 - 30

console.log(c, " ", d); // 40 30

c = c ^ d;
d = c ^ d;
c = c ^ d;
console.log(c, " ", d); // 30 40
