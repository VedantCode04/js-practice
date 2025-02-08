var name = "vedant";

// accessing string
console.log(name[0]);
console.log(name.at(0));
console.log(name.at(-1));
console.log(name.length);
//  0  1  2  3  4  5
//  v  e  d  a  n  t
// -6 -5 -4 -3 -2 -1

name[0] = "h"; // won't work as strings are immutable,
// dont throw error, but in strict mode, will throw error
console.log(name); // still prints 'vedant' as string are immutable

// need to replace the string in case to change it
name = "Vedant"; // now name refers to different value as the old value can't change due to immutablity

// changing case
console.log(name.toUpperCase()); // VEDANT
console.log(name.toLowerCase()); // vedant

// ********* searching in string

var str = "Widget with id";

console.log(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
console.log(str.indexOf("widget")); // -1, not found, the search is case-sensitive

console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)
console.log(str.indexOf("i"));
// returns the index of first occurance of the given substring
// For instance, the first occurrence of "id" is at position 1.
//To look for the next occurrence, let’s start the search from position 2:

console.log(str.indexOf("id", 2)); // 12

// string.includes(str)

console.log("Widget with id".includes("Widget")); // true

console.log("Hello".includes("Bye")); // false
console.log("Widget".includes("id")); // true
console.log("Widget".includes("id", 3)); // false, from position 3 there is no "id"
// string.startsWith(str)
console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"

// slice(start index, end index) -> start is included, end is exculded
// if end not defined, then will slice till end of the string
var str = "stringify";

console.log(str.slice(0, 4)); // stri
console.log(str.slice(3)); // ingify
// start at the 4th position from the right, end at the 1st from the right
console.log(str.slice(-4, -1)); // 'gif'
// these are same for substring
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// substr(start index, length from start index )

console.log(str.substr(1, 4)); // trin // get 4 length from index 1
console.log(str.substr(-4, 2)); // 'gi', from the 4th position get 2 characters

// str.substring(start [, end])
// Returns the part of the string between start and end (not including end).
// This is almost the same as slice, but it allows start to be
//greater than end (in this case it simply swaps start and end values).

// these are same for substring
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// ...but not for slice:
console.log(str.slice(2, 6)); // "ring" (the same)
console.log(str.slice(6, 2)); // "" (an empty string)

// str.localeCompare(str2)
console.log("vedant".localeCompare("Vedant"));

// to check strings lexicographical manner
console.log("xabc" > "Xabc"); // true
console.log("xabc" < "Xabc"); // false , as 'x' > 'X'

// trim - to remove whitespace from both ends of the string
// trimStart , trimEnd
console.log("     abc    ".trim());

// replace and replaceAll
// 'replace' only replaces the first matched instance, to replace all instances
// use regex exp with global tag or use 'replaceAll'
console.log("hello world hello world".replace("world", "WORLD"));
console.log("hello world hello".replaceAll("hello", "HELLO"));

// str.replace(regex, (match, p1, p2....) => {
// function here to replace the matched values,
// p1 p2... are the matched values in the string
//})

// split(seperator)

console.log("vedant".split()); //   ['v', 'e', 'd', 'a', 'n', 't' ]
console.log("v-e-d-a-n-t".split("-")); // ['v', 'e', 'd', 'a', 'n', 't' ]
