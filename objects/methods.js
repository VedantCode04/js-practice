const obj = {
  name: "vedant",
  age: 21,
  company: "ABC corp",
  getName: function name(params) {
    return this.name;
  },
};

// 1. obj.hasOwnProperty(prop)

console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("getName")); // true
console.log(obj.hasOwnProperty("school")); // false
