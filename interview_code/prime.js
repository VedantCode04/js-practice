const num = 4;

let count = 0;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    console.log("not a prime");
    count++;
    break;
  }
}

if (!count) {
  console.log("is prime");
}
