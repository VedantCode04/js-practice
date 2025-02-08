// both valid ways to create Arrays
var arr = [1, 2, 3, 4];
var arr = new Array(1, 2, 3, 4);
console.log(arr);

// In js , array is a special type of object that stores items in a sequential manner
var arr = [1, 2, 3, 4];
console.log(typeof arr); // Object
arr.age = 21; // can add properties as it is Object itself
console.log(arr.age); // 21
console.log(typeof arr); // Object

var arr = [1, 2, 3, 4];
arr[20] = 10;
console.log(arr.length); // 21
console.log(arr); // [1,2,3,4, empty x 16..., 10]

// It is copied by reference
var arr = [1, 2, 3, 4];
var arr2 = arr;
console.log(arr === arr2); // true, both refers to same memory location
arr2.push(10);
console.log(arr); // [1,2,3,4,10]

// Array methods

// 1. push - to add elemets at last and returns the latest length

var arr = [];
arr.push(10);
arr.push(11);
console.log(arr.push(12)); // 3
console.log(arr); // [1,2,3]

// 2. pop - to remove elements from last, returns the removed element

var arr = [1, 2, 3, 4];
console.log(arr.pop()); // 4
console.log(arr); // [1,2,3]

// 3. unshift - adds element to start of the array, returns latest length

var arr = [1, 2, 3];
console.log(arr.unshift(0)); // 4
console.log(arr); // [0,1,2,3]

// 4. shift - removes the first element and returns it

var arr = [1, 2, 3];
console.log(arr.shift()); // 1
console.log(arr); // [2,3]

// 5. at - gives element at the given index, supports negative values

var arr = [1, 2, 3];
console.log(arr.at(1)); // 2
console.log(arr.at(-1)); // 3, returns last element

// 6. delete - delete specific element , as array is object itself
var arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log(arr[1]); // undefined
console.log(arr.length); // 3
console.log(arr); // ["I", <empty> , "home"]

// 7. splice(index, no. of element to remove, ...elements to add after remove)
// changes the array itself
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.splice(2, 3)); // [3,4,5] returns the deleted elements
console.log(arr); // [ 1, 2, 6, 7, 8 ]
console.log(arr.splice(2, 1, 97, 98)); // [6] removed element
console.log(arr); // [ 1, 2, 97, 98, 7, 8 ]
console.log(arr.splice(2, 0, 100)); //  [] empty as no element removed
console.log(arr); //[1, 2, 100, 97, 98, 7, 8];
arr.splice(-1, 0, 101);
console.log(arr); // [ 1, 2, 100, 97, 98, 7, 101,  8]

// 8. slice(start, end) : returns new array from start to end ,
// without changing the original array

var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(1, 3)); // [ 2, 3 ]
console.log(arr); // [1, 2, 3, 4, 5, 6]
console.log(arr.slice()); // returns whole array

// 9. concat: combines two array and returns a new array
// don't modify the og array
var arr = [1, 2];

// create an array from: arr and [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
console.log(arr);

// 10. indexOf(val) : returns first index of the element found in array , else -1
var arr = [1, 2, 3, 4, 3];
console.log(arr.indexOf(3)); // 2

// 11. lastIndexOf(val) : returns last index of element in array , else -1
var arr = [1, 2, 3, 4, 3];
console.log(arr.lastIndexOf(3)); // 4

// 12. join(<char>) : joins the array with the specifid char and return a string
var arr = [1, 2, 3, 4];
console.log(arr.join("")); // "1234"
console.log(arr.join("-")); // "1-2-3-4"

// 13. reverse() : reverse the array in-place

var arr = [1, 2, 3, 4];
console.log(arr.reverse()); // [4,3,2,1]
console.log(arr); // [4,3,2,1]

// Higher order functions

// 1. map(callback) : iteraters over the array and returns a
//new array appliying the callback function on each element
// and returns a new array

var arr = [1, 2, 3, 4];
console.log(arr.map((val) => val * 2)); // [2,4,6,8]

// 2. filter(callback) : filters the array and returns elements that passes
// filter function, i.e returns true
// returns empty array if no element filtered
var arr = [1, 2, 3, 4];
console.log(arr.filter((val) => val % 2 == 0)); // [2,4]

//3. some(callback) : checks if any of the element in the array passes the condition in the callback
// returns true / false
var arr = [1, 2, 3, 4];
console.log(arr.some((val) => val % 2 == 0)); // true

// 4. every(callback) : returns true only if every element passes the callback
var arr = [1, 2, 3, 4];
console.log(arr.every((val) => val % 2 == 0)); // false

// 5. find(callback) : returns the first element that passes the callback
// else returns undefined if no element find
var arr = [1, 2, 3, 4];
console.log(arr.find((val) => Math.sqrt(val) == 2)); // 4

// 6. reduce((acc, value, index, arr) => {//code}, initialvalue of acc)
// to reduce the whole array into a one value
// In the reduce method, if the initial value of the accumulator (acc) is not provided, it defaults to the first element of the array,
// and the iteration starts from the second element.
var arr = [1, 2, 3, 4];

var sum = arr.reduce((acc, val, i) => {
  return acc + val;
}, 0);
console.log(sum);
