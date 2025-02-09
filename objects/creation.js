// ways to create objects in js

// 1. object literals : es6
// most simple and most used way

obj = {
  name: "vedant",
  age: 10,
};

console.log(obj);

// 2. Object.assign(target, ..objects)
// to add multiple objects into a single one

obj = Object.assign({}, { name: "vedant" }, { age: 21 });
console.log(obj); // { name: 'vedant', age: 21 }
obj = Object.assign({ gender: "male" }, { name: "vedant" }, { age: 21 });
console.log(obj); // { gender: 'male', name: 'vedant', age: 21 }

// 3. Object.create(obj) : allows to create a new object using an existing object as prototype
obj = {
  name: "vedant",
};
obj2 = Object.create(obj);
obj2.age = 21;

console.log(obj2); // { age: 21 }
console.log(obj2.name); // vedant

// 4. Object constructor
// using constructor functions to generate objects

function User(name, age) {
  this.name = name;
  this.age = age;
}

obj = new User("vedant", 23);
console.log(obj); // User { name: 'vedant', age: 23 }

////////////////
function User(name, age, occupation) {
  this.name = name;
  this.age = age;
  return {
    occupation: occupation ?? "sde",
  };
}

// returns the new object inside 'this', unless the returned value is not an object, it is ignored
obj = new User("vedant", 23, "node js dev");
console.log(obj); // { occupation: 'node js dev' }

//////////////////
function User(name, age, occupation) {
  this.name = name;
  this.age = age;
  return "hello";
}

obj = new User("vedant", 23, "node js dev"); // works as normal constructor function , returns nothing even if specified, unless the return is an object, then the object is returned
obj2 = User("vedant", 23, "node js dev"); // works as normal function when called without 'new' keyword
console.log(obj); // User { name: 'vedant', age: 23 }
console.log(obj2); // "hello",

// 5. Using new Object(obj), now the new created object will refer to the obj passed inside

obj2 = new Object(obj);
console.log(obj2 === obj); // true

// 6. using Factory functions : returns new object everytime called with specified structure
function createObject(key1, key2) {
  return {
    key1: key1, // Property with value passed as argument
    key2: key2, // Property with value passed as argument
  };
}
const objFactory = createObject("value1", "value2");
console.log("factory");
console.log(objFactory); // { key1: 'value1', key2: 'value2' }
