const str = "vedantvvveeda";

const ans = [...str].reduce((acc, el) => {
  if (acc[el] === undefined) {
    acc[el] = 1;
  } else {
    acc[el] += 1;
  }

  return acc;
}, {});

console.log(ans);
