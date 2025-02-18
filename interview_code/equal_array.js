const arr = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

let js1 = JSON.stringify(arr);
let js2 = JSON.stringify(arr2);

console.log(js1);

// method 2

if (arr.length !== arr2.length) {
  console.log("not equals");
} else {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      console.log("not equal");
      temp++;
      break;
    }
  }

  if (!temp) {
    console.log("equal");
  }
}
