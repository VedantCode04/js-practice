let str = "ved";

let strRev = [...str].reverse().join("");

if (strRev == str) {
  console.log("is palindrome");
} else {
  console.log("not");
}

// other medthod
let temp = 0;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - i - 1]) {
    console.log("not");
    temp++;
    break;
  }
}

if (!temp) {
  console.log("is palindrome");
}
