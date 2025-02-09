var arr = [1, 2, 3, 4];

var [firstel, secondel, ...el] = arr;
console.log(firstel, " : ", secondel, " : ", el); // 1  :  2  :   [ 3, 4 ]

var [firstel, , thirdel] = arr;
console.log(firstel, " ", thirdel); // 1 3

var guest = "Jane";
var admin = "Pete";

// var's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];
console.log(guest, " ", admin); // pete jane

// default values
var [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name); // Julius (from array)
alert(surname); // Anonymous (default used)

// can also be complex , like prompts
var [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];

alert(name); // Julius (from array)
alert(surname); // whatever prompt gets

// object destructuring

var options = {
  title: "Menu",
  width: 100,
  height: 200,
};

// { sourceProperty: targetVariable }
var { width: w, height: h, title } = options;

console.log(w, h, title); // 100 200 Menu

var options = {
  title: "Menu",
};

var { width: w = 100, height: h = 200, title } = options;

alert(title); // Menu
alert(w); // 100
alert(h); // 200

var options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
var {
  size: {
    // put size here
    width,
    height,
  },
  items: [item1, item2], // assign items here
  title = "Menu", // not present in the object (default value is used)
} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
alert(item1); // Cake
alert(item2); // Donut
