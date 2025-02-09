// allows for key-value pair in js
// allows to store multiple data's at one place

var obj = {
  name: "vedant",
  age: 21,
  occupation: "software developer",
};

console.log(obj); // {name: "vedant", age: 21}

// *********how to access values in objects

console.log(obj.name); // vedant
var myage = age;
console.log(obj[myage]); // 21
console.log(obj["occupation"]); // software developer

// **********devaring values in object

delete obj; // does nothing, it only works for keys, obj stays there

delete obj.age; // devare the name property and returns true

// ********** property name

var fruits = "fav fruits";
var obj = {
  [fruits]: "mango", // computed properties
};

console.log(obj); //  { 'fav fruits': 'mango' }

// special keywords as object keys are allowed, except objects
var objkey = {};
obj = {
  var: 10,
  for: 20,
  return: 30,
  [objkey]: 40, // would throw refrence error not defined, as objKey is object and not allowed
};

console.log(obj);
// ******** to check if a property exists in object

obj = {
  age: 20,
};
console.log(age in obj); // true
console.log(name in obj); // false

// iterable all enumerable properties using for...in loop

obj = {
  var: 10,
  for: 20,
  return: 30,
  age: 22,
  name: "vedant",
};

for (var key in obj) {
  console.log(key); // var for return age name
}

// ********* odering of object properties
// in case if all the key's are numbered, then it is sorted
// else in the way they are entered in the object

obj = {
  1: "20",
  2: "20",
  3: "20",
  4: "20",
  0: "10",
};

for (var keys in obj) {
  console.log(keys); // 0 1 2 3 4
}

obj = {
  var: 10,
  for: 20,
  return: 30,
  age: 22,
  1: "abc",
  0: "def",
};

obj.name = "vedant";

for (var keys in obj) {
  console.log(keys); // 0 1 var for return age name
}

// first the numberic in sorted order, then string props in the order they are stored

// ****** references in objects

var obj2 = {
  name: "vedant",
};

var obj3 = {
  name: "vedant",
};

console.log(obj2 == obj3); // false,
// even tho both the objects seems same, they refer to different memory spaces
var tempObj = obj2;
console.log(tempObj === obj2); // true, as tempObj referes to same object space
// changing the temoObj will still affect the obj2 as both are refering to same memory
obj3.age = "21";
// even if declared with const, we can still edit the object properties cause
// cause the object is still refering to same memory space,
// if trying to assign to diff object, then throws error

// ******** creating copies of the object

// 1. using assign() method
// shallow copy

var obj4 = {
  name: "vedant",
  age: "",
};

obj = Object.assign({}, obj4);

console.log(obj); // { name: 'vedant', age: '' }
console.log(obj === obj4); // false

obj5 = {
  name: "vedant",
  details: {
    age: 21,
  },
};

obj6 = Object.assign({}, obj5);

console.log(obj6 === obj5); // false
console.log(obj6.details === obj5.details); // true
// cause assign() doesnt deep clone the object, only shallow clone
// the inside objects in both still refers to the same

// 2. spread operator
// only shallow copy

obj5 = {
  name: "vedant",
  details: {
    age: 21,
  },
};

obj6 = { ...obj5 };

console.log(obj6 === obj5); // false
console.log(obj6.details === obj5.details); // true

// 3. structuredClone
// deep clone

obj = {
  name: "vedant",
  details: {
    age: 21,
  },
};

obj2 = structuredClone(obj);

console.log(obj2 === obj); // false
console.log(obj2.details === obj.details); // false

obj = {
  name: "vedant",
  f: function () {
    console.log("function");
  },
};

obj2 = structuredClone(obj); // throw's error
// function's cant be cloned using structuredClone

console.log(obj2 === obj); // false

// 4. json stringify + parse
// deep clone , clones functions also
// best approach
obj = {
  name: "vedant",
  details: {
    age: 21,
  },
  f: function () {
    console.log("function");
  },
};

obj2 = JSON.parse(JSON.stringify(obj));

console.log(obj2 === obj); // false
console.log(obj2.details === obj.details); // false
