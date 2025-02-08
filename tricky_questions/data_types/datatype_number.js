var name = "hello";
console.log(Object.keys(name));
console.log(Object.values(name));
console.log(Object.entries(name));
//["0", "1", "2", "3", "4"]
//[("h", "e", "l", "l", "o")][
//(["0", "h"], ["1", "e"], ["2", "l"], ["3", "l"], ["4", "o"])];
// string is an iterable , so it works

var name = 123;
console.log(Object.keys(name));
console.log(Object.values(name));
console.log(Object.entries(name));
// [] [] []
// not an iterable

var billion = 1000000000;
var billion2 = 1_000_000_000;
console.log(billion, " ", billion2);
// 1000000000   1000000000
// Here the underscore _ plays the role of the “syntactic sugar”,
//it makes the number more readable. The JavaScript engine simply
// ignores _ between digits, so it’s exactly the same one billion as above.

var billion3 = 1e9; // 1 billion, literally: 1 and 9 zeroes
// multiplies the value before 'e' with 10^x , x = the value after 'e'
alert(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

var num = 255;
// number.toString(x), x = base, like 2 for binary, 8 for ocatcl, 10 for decimal, 16 for hexa
alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111

// Using two dots (..)
// console.log(123456..toString(36));  // {whatever the answer is, it is valid}
// Explanation:
// - The first dot is part of the number.
// - The second dot accesses the toString(36) method.
// - Converts 123456 to a base-36 string, resulting in "2n9c".

// Using parentheses
console.log((123456).toString(36));
// Explanation:
// - The parentheses explicitly define 123456 as a number.
// - Then we call toString(36) safely.
// - The result is still "2n9c".

// Incorrect way that causes an error
// console.log(123456.toString(36));
// Explanation:
// - JavaScript interprets 123456. as a floating-point number (123456.0).
// - Then it gets confused because it expects more digits after the decimal.
// - This leads to a syntax error.

console.log(Math.round(3.1)); // 3 rounds to nearest value
console.log(Math.round(3.9)); // 4
console.log(Math.floor(3.1)); // 3 , sets to lower integer value
console.log(Math.ceil(3.1)); // 4 sets to higher integer value
console.log(Math.trunc(3.9999999)); // 3 . removes all part after decimal

var num = 12.34;
console.log(num.toFixed(1)); // "12.3"
// This rounds up or down to the nearest value, similar to Math.round:

var num = 12.36;
console.log(num.toFixed(1)); // "12.4"
//Please note that the result of toFixed is a string.
//If the decimal part is shorter than required, zeroes are appended to the end.
// to convert it again to num, use +num.toFixed(x), unary +

// add examples of parseInt and parseFloat here
console.log(parseInt("100px")); // 100 - Extracts integer from string by stopping at the first non-numeric character.
console.log(parseFloat("12.5em")); // 12.5 - Extracts floating-point number until it encounters a non-numeric character.
console.log(parseInt("0xff", 16)); // 255 - Parses hexadecimal as 0xff is a valid hex number.
console.log(parseFloat("3.14.15")); // 3.14 - Stops parsing at the second dot since it's an invalid number format.
console.log(parseInt("abc")); // NaN - Cannot extract a number from a non-numeric string.

// add examples of isNan isFixed and Number.isNan and Number.isFixed here
// isNaN(value) converts its argument to a number and then tests it for being NaN
// Number.isNaN(value) checks whether its argument belongs to the number type, and if so, tests it for being NaN
// isFinite(value) converts its argument to a number and then tests it for not being NaN/Infinity/-Infinity
// Number.isFinite(value) checks whether its argument belongs to the number type, and if so, tests it for not being NaN/Infinity/-Infinity

// isNaN and Number.isNaN examples:
console.log(isNaN("hello")); // true - "hello" is converted to NaN, and isNaN detects it.
console.log(Number.isNaN("hello")); // false - "hello" is not a number type, so it returns false.
console.log(isNaN(NaN)); // true - NaN is NaN.
console.log(Number.isNaN(NaN)); // true - Checks strictly for NaN within number type.

// isFinite and Number.isFinite examples:
console.log(isFinite("10")); // true - "10" is converted to a number, which is finite.
console.log(Number.isFinite("10")); // false - "10" is a string, not a number.
console.log(isFinite(Infinity)); // false - Infinity is not finite.
console.log(Number.isFinite(Infinity)); // false - Infinity is not finite.
console.log(isFinite(NaN)); // false - NaN is not finite.
console.log(Number.isFinite(NaN)); // false - NaN is not finite.
