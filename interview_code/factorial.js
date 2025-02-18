const num = 10;

let ans = 1;

for (let i = 2; i <= num; i++) {
  ans *= i;
}

console.log(ans);

// way 2 - recurssion

const getFact = () => {
  if (num < 2) {
    return 1;
  }

  return num * getFact(num - 1);
};

console.log(getFact(5));
