const obj = {
  name: "vedant",
  age: 21,
  company: "ABC corp",
  getName: function name(params) {
    return this.name;
  },
};

// 1. obj.hasOwnProperty(prop)
// checks if a propety is object's own property
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("getName")); // true
console.log(obj.hasOwnProperty("school")); // false

// 2. object.isPrototypeOf(obj2)
// check if object is abailable in prototype chain of obj2
console.log(Object.prototype.isPrototypeOf(obj)); // true

// 3. obj.propertyIsEnumerable(property)
// checks if property is enumerable inside obj

console.log(obj.propertyIsEnumerable("name")); // true

// 4. Object.keys(obj)
// returns enumerable keys from Object

console.log(Object.keys(obj)); // [ 'name', 'age', 'company', 'getName' ]

// 5. Object.values(obj)
// returns enumerable values from Object

console.log(Object.values); // [ 'vedant', 21, 'ABC corp', [Function: name] ]

// 6. Object.entries(obj)
// return [...[key , value]] pair in array

console.log(Object.entries(obj));
// [
//   [ 'name', 'vedant' ],
//   [ 'age', 21 ],
//   [ 'company', 'ABC corp' ],
//   [ 'getName', [Function: name] ]
// ]

// 6. Object.preventExtensions(obj)
// disables adding new properties in object , but old ones still can be deleted

console.log(Object.preventExtensions(obj)); // obj{...}

// 7. Object.isExtensible(obj)
// check if more properties can be added to the obj or not

console.log(Object.isExtensible(obj)); // false

// 8. Object.fromEntries(arr)
// creates a new object from key value array pair
// [[key, value]...]

let arr = [
  [10, "hello"],
  [20, "world"],
];

console.log(Object.fromEntries(arr)); // { '10': 'hello', '20': 'world' }

// 9. Object.getPrototypeOf(obj)
// returns prototype of obj

console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// 10. Object.setPrototypeOf(obj, proto)
// sets prototype of the obj

console.log(Object.setPrototypeOf(obj, null)); // obj {...}
console.log(Object.getPrototypeOf(obj)); // null

// 11. Object.seal(obj)
// seals the object
// properties can not be added or deleted (dont throw error in non strict mode)
// but existing ones can be edited
// their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned

Object.seal(obj);

// Object.isSealed(obj) - returns true if object is sealed
console.log(Object.isSealed(obj)); // true

// 12. Object.freeze(obj)
// Object.seal() + property can not be changed also

Object.freeze(obj);

// Object.isFrozen(obj) - returns true if object is frozen

console.log(Object.isFrozen(obj)); // true

// 13. Object.defineProperty(obj, prop, descriptor)
// descriptor = {writable, enumerable, configurable, readable}
// writable : true | false - edit if the property is writable or not
// readbale : same for this,
// enumerable : same for this also
// configurable : same for this
// once set false to configurable, it's is permenantly locked, cant be changed
// Please note: configurable: false prevents changes of property flags
// and its deletion, while allowing to change its value.
// EXCEPTION : The only attribute change possible: writable true → false

Object.defineProperty(obj, "name", {
  writable: false,
});

obj.name = "Itachi"; // wont work

// 14. Object.defineProperties(obj, {
//   prop1: {
//     descriptor
//   },
//   prop2: ......
// })

// same as above, just list of properties
