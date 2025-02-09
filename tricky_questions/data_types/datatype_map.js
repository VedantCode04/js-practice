//Map is a collection of keyed data items, just like an Object.
//But the main difference is that Map allows keys of any type.

var map = new Map();

// 1. map.set(key, value)

map.set(1, "20");
map.set("name", "vedant");
console.log(map.set({ details: "age" }, "23"));
// every set returns the map itself, so it is possible to chain multiple methods

console.log(map);
// Map(3) { 1 => '20', 'name' => 'vedant', { details: 'age' } => '23' }

// 2. map.get(key)
console.log(map.get({ details: "age" })); // undefined
console.log(map.get("name")); // vedant
// undefiend, although key is same as above,
//both Objects are different memory location
// to get value, assign that object to a variable then use it to retrive values
// eg: obj = let obj = { details: "age" };

// 3. map.has(key) - retruns true if key exists

console.log(map.has("name")); // true
console.log(map.has("abc")); // false

// 4. map.delete(key)

console.log(map.delete("name")); // return's true if key exists else false
console.log(map);
// Map(2) { 1 => '20', { details: 'age' } => '23' }

// 5. map.size : to get total number of keys

console.log(map.size); // 2
// 6. map.clear() - to empty the map
console.log(map.clear());
// returns 'undefined'

// 7. NaN as key
map.set(NaN, "hello");
console.log(map.get(NaN)); // "hello"
// you can even set NaN as key in Map

// how to iterate over map
map.set(1, "20");
map.set("name", "vedant");
console.log(map.set({ details: "age" }, "23"));
//The iteration goes in the same order as the values were inserted
console.log(map.keys()); // [Map Iterator] { NaN, 1, 'name', { details: 'age' } }
console.log(map.values()); // [Map Iterator] { 'hello', '20', 'vedant', '23' }
console.log(map.entries()); //[Map Entries] {[ NaN, 'hello' ],[ 1, '20' ],[ 'name', 'vedant' ],[ { details: 'age' }, '23' ]}

// Set: set in js is used to store unique values only
// new Set(<iterable>)
var set = new Set();

// 1. add(val) : to add elements to set
set.add("10");
set.add("20");
console.log(set.add(30)); // Set(3) { '10', '20', 30 }
set.add("10");
console.log(set, " size = ", set.size); // Set(3) { '10', '20', 30 } size = 3

// 2. has(val) : to check if a element exists in set or not, returns bool

console.log(set.has("20")); // true
console.log(set.has(35)); // false

// 3. delete(value) : to delete element from set
// returns true if element deleted else false
console.log(set.delete(30));

// 4. iterating over a set

// returns an iterable object for entries [value, value], exists for compatibility with Map and Objects
console.log(set.entries()); // { [ '10', '10' ], [ '20', '20' ] }
console.log(set.values()); // { '10', '20' }
console.log(set.keys()); // { '10', '20' } values itself

// 5. clear() : empties the set
// returns 'undefined
console.log(set.clear());

// iteration using forEach

map.set("city", "New York");
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// NaN: hello
// 1: 20
// name: vedant
// { details: 'age' }: 23
// city: New York

var set2 = new Set.add("apple").add("banana").add("cherry");
set2.forEach((value) => {
  console.log(value);
});
// Output:
// apple
// banana
// cherry
