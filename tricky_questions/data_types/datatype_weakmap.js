// weakmap and weakset ,
// only allows objects as values in case of weakset
// weakmap : only allows object as keys

// weakmap: don't support map methods like
// clear, size, keys, values
// it is not iterable, i.e we can't print the map, as if it was iterable, the references to the object need to be saved which will destroy the whole concept of weakmap  , which is auto deleting the entries when the key object is unreachable
// automatic removes from map when the object which is used as key is unreachable means, JS automatically GC's when the object is totally unreachable from any where in the code
// this also removes that from the weakmap which saves the memory

var map = new WeakMap();

let vedantAge = { age: 10 };
let pujanAge = { age: 8 };
map.set(vedantAge, "vedant");
map.set(pujanAge, "pujan");
// map.set("hello", "abc"); // throws error
console.log(map); // WeakMap { <items unknown> }
console.log(map.get(vedantAge)); // vedant
map.delete(pujanAge); // undefined
console.log(map.get(pujanAge));
vedantAge = null;
console.log(map.get(vedantAge)); // undefined

//WeakSet is Set-like collection that stores only objects and
//removes them once they become inaccessible by other means.
var set = new WeakSet();

set.add({ age: 10 });
set.add({ age: 20 });
set.delete({ age: 20 });
// This does NOT work as expected because `{ age: 20 }` is a new object reference,
// not the exact one stored inside WeakSet.

console.log(set); // WeakSet { <items unknown> }

// - Ideal for **tracking objects without preventing their garbage collection**.
// - Useful in **DOM tracking, caching, session tracking**.
// - **Prevents memory leaks** by automatically deleting objects when no longer referenced.
