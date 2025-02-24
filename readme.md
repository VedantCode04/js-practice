## Basics

# JavaScript Concepts Explained

## Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase, before execution. This means you can use functions and variables before actually declaring them in the code.

```js
console.log(a); // undefined
var a = 10;
```

Function declarations are fully hoisted:

```js
hello();
function hello() {
  console.log("Hello World");
}
```

## Code Execution in JavaScript

JavaScript execution happens in two phases:

1. **Creation Phase**: The memory is allocated for variables and functions. Variables declared with `var` are initialized with `undefined`.
2. **Execution Phase**: Code is executed line by line.

## Ways to Declare Variables in JavaScript

- `var`: Function-scoped, can be redeclared, hoisted, and initialized as `undefined`.
- `let`: Block-scoped, cannot be redeclared, hoisted but not initialized.
- `const`: Block-scoped, cannot be redeclared or reassigned.

## Difference Between `var`, `let`, and `const`

| Feature       | var                              | let               | const             |
| ------------- | -------------------------------- | ----------------- | ----------------- |
| Scope         | Function                         | Block             | Block             |
| Hoisting      | Yes (initialized as `undefined`) | Yes (TDZ applies) | Yes (TDZ applies) |
| Redeclaration | Allowed                          | Not Allowed       | Not Allowed       |
| Reassignment  | Allowed                          | Allowed           | Not Allowed       |

## Hoisting and TDZ (Temporal Dead Zone)

- `var` is hoisted with `undefined`.
- `let` and `const` are hoisted but not initialized, causing a **Temporal Dead Zone (TDZ)** where accessing them before declaration causes an error.

## Data Types in JavaScript

### Primitive Data Types:

- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt

### Non-Primitive (Reference) Data Types:

- Object
- Array
- Function
- Date
- Map
- Set

## `==` vs `===`

- `==` (Abstract Equality): Compares values with type coercion.
- `===` (Strict Equality): Compares values without type coercion.

```js
console.log(5 == "5"); // true (type coercion happens)
console.log(5 === "5"); // false (strict type check)
```

## Type Coercion vs Type Casting

- **Type Coercion**: JavaScript automatically converts one data type to another.
- **Type Casting**: Explicit conversion using functions like `Number()`, `String()`, etc.

## `null` vs `undefined` vs `not defined`

- `null`: Intentional absence of value.
- `undefined`: Variable declared but not assigned.
- `not defined`: Variable is not declared at all.

## Map, Set, WeakMap, WeakSet

- **Map**: Stores key-value pairs, where keys can be of any type.
- **Set**: Stores unique values.
- **WeakMap**: Similar to Map but with weak references (keys must be objects).
- **WeakSet**: Similar to Set but stores objects with weak references.

## Lexical Environment

A structure that holds variable and function declarations, forming the basis of scope in JavaScript.

## Scopes in JavaScript

### Types of Scope:

1. **Global Scope**: Accessible everywhere.
2. **Local Scope**: Variables inside a function.
3. **Block Scope**: Variables inside `{}` using `let` and `const`.
4. **Lexical Scope**: Inner functions can access variables of outer functions.

## Template Strings

Allows embedding expressions using backticks (`) and `${}`.

```js
const name = "John";
console.log(`Hello, ${name}!`);
```

## Destructuring

Extracting values from arrays or objects.

```js
const [a, b] = [10, 20];
const { name, age } = { name: "Alice", age: 25 };
```

## Falsy Values in JavaScript

Values considered `false` in a boolean context:

```
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
```

## Functions

## JavaScript Functions and Related Concepts

### 1. Function

**Definition:**
A function is a block of reusable code designed to perform a particular task. It is executed when "called" or "invoked".

**Example Usage:**
Functions are used to encapsulate code for specific tasks, allowing for reusability and better organization.

### 2. Function Declaration

**Definition:**
A function declaration defines a function with the specified parameters and is hoisted to the top of its scope.

**Characteristics:**

- It can be called before its declaration in the code due to hoisting.
- It starts with the `function` keyword, followed by the function name, a list of parameters in parentheses, and the function body in curly braces.

### 3. Function Expression

**Definition:**
A function expression defines a function as part of a larger expression syntax (such as assigning it to a variable). It is not hoisted.

**Characteristics:**

- The function can be anonymous or named.
- It is typically used when functions are passed as arguments to other functions or assigned as values to variables.

### 4. Arrow Function

**Definition:**
Arrow functions provide a concise syntax for writing functions. They do not have their own `this`, `arguments`, `super`, or `new.target`.

**Characteristics:**

- Introduced in ES6.
- Lexically binds the `this` value, making them suitable for callbacks and methods that rely on a specific `this` context.
- Cannot be used as constructors (i.e., cannot use the `new` keyword with them).

### 5. Arrow Function vs Function Declaration

| Feature        | Arrow Function                 | Function Declaration        |
| -------------- | ------------------------------ | --------------------------- |
| Syntax         | Shorter                        | Longer                      |
| `this` Binding | Lexical                        | Dynamic                     |
| Constructor    | Cannot be used as constructors | Can be used as constructors |
| Hoisting       | No                             | Yes                         |

### 6. Rest vs Spread Syntax

- **Rest Syntax:**
  Allows a function to accept an indefinite number of arguments as an array.

- **Spread Syntax:**
  Allows an iterable to expand in places where multiple arguments or elements are expected.

### 7. Arguments Object

**Definition:**
An array-like object accessible inside functions that contains the values of the arguments passed to that function.

**Characteristics:**

- Not a real array, but it has length and can be indexed.
- Does not work with arrow functions.

### 8. Default Parameters

**Definition:**
Allows setting default values for function parameters if no value or `undefined` is passed.

**Characteristics:**

- Provides a way to handle optional function parameters.
- Makes code more readable and concise.

### 9. `function.length` / `function.name`

- **`function.length`:**
  Returns the number of parameters a function is expected to have.

- **`function.name`:**
  Returns the name of the function.

### 10. Function as an Object

**Definition:**
In JavaScript, functions are first-class objects. This means they can have properties and methods, and can be passed as arguments to other functions, returned from functions, and assigned to variables.

**Characteristics:**

- Can have properties and methods.
- Can be created dynamically using the `Function` constructor.

### 11. Higher-Order Function

**Definition:**
A function that takes another function as an argument or returns a function as a result.

**Characteristics:**

- Commonly used in functional programming.
- Examples include `map`, `filter`, and `reduce` methods on arrays.

### 12. Functions as First-Class Citizens

**Definition:**
Functions are called first-class citizens because they can be treated like any other variable, including being passed as arguments, returned from functions, and assigned to variables.

**Characteristics:**

- Enables functional programming techniques.
- Allows for the creation of higher-order functions.

### 13. Pure and Impure Functions

- **Pure Function:**
  A function that always produces the same output given the same input and does not have any side effects (e.g., does not modify global variables or perform I/O operations).

- **Impure Function:**
  A function that may produce different outputs for the same input or has side effects (e.g., modifies global variables, performs I/O operations).

### 14. Function Currying

**Definition:**
The process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

**Characteristics:**

- Useful for creating partially applied functions.
- Enhances code reusability and readability.

### 15. Constructor Functions

**Definition:**
Functions used to create instances of objects, typically invoked with the `new` keyword.

**Characteristics:**

- The `new` keyword creates an instance of the object and binds `this` to the new instance.
- Constructor functions start with a capital letter by convention.

### 16. `new` Operator

**Definition:**
Creates an instance of an object that has a constructor function.

**Characteristics:**

- Allocates memory for the new object.
- Sets the prototype of the new object to the prototype of the constructor function.

### 17. `new.target`

**Definition:**
A meta-property that lets you detect whether a function or constructor was called using the `new` operator.

**Characteristics:**

- Available within a function or constructor

### 18. `new Function()`

**Definition:**
The `new Function()` constructor creates a new Function object dynamically from a string.

**Syntax:**
`new Function([arg1[, arg2[, ...argN]],] functionBody)`

**Characteristics:**

- Functions created this way don't form closures.
- They always run in the global scope.
- Useful for dynamic code generation, but use with caution due to potential security risks, like code injection

## Objects

- What is an object
- Different ways to create objects in JS (literals, `Object.assign`, `new Object()`, constructor functions, classes, Object.create())
- Object methods in JS
- Methods in objects
- Deep vs shallow copy
- `structuredClone`
- `JSON.stringify` / `JSON.parse`
- `Object.defineProperty(obj, prop, {writable, enumerable, value, configurable})`
- Dynamic properties using `[]`
- Delete property
- `for..in` loop
- `in` operator
- What are getters and setters

## Prototype Inheritance

### What is it

**Definition:**
Prototype inheritance in JavaScript is a mechanism by which objects can inherit properties and methods from other objects. This allows for the reuse of properties and methods defined in a prototype object by other objects that are linked to it.

### What is the Prototype Chain

**Definition:**
The prototype chain is a series of linked objects, each pointing to its prototype, eventually leading to `null`. When a property or method is accessed on an object, JavaScript searches for it in the object itself and then follows the prototype chain to find it, if not found.

### `prototype` vs `__proto__`

- **`prototype`:**
  A property of a constructor function that is used to attach properties and methods that should be inherited by instances created by that constructor.

- **`__proto__`:**
  An internal property (now deprecated in favor of `Object.getPrototypeOf` and `Object.setPrototypeOf`) that references the prototype of the object. It is the actual object that is used in the lookup chain to resolve methods and properties.

### `Function.prototype`

**Definition:**
`Function.prototype` represents the prototype object from which all function objects inherit properties and methods. It includes methods like `call`, `apply`, and `bind`.

### `Object.prototype`

**Definition:**
`Object.prototype` represents the prototype object from which all objects inherit properties and methods in JavaScript. It includes methods like `toString`, `hasOwnProperty`, and `isPrototypeOf`.

### Polyfilling

**Definition:**
Polyfilling is the practice of creating code that provides modern functionality on older browsers that do not natively support it. This can involve implementing functions that behave like newer JavaScript features to ensure compatibility.

### Additional Questions on Prototype Inheritance

1. **What are the benefits of using prototype inheritance in JavaScript?**

   - Allows for efficient reuse of properties and methods.
   - Reduces memory usage by sharing methods among instances.
   - Provides a structured way to create objects with shared behavior.

2. **How does prototype inheritance affect memory usage and performance?**

   - Shared methods and properties reduce memory consumption.
   - Can improve performance by avoiding duplicate code in each object instance.

3. **What is the difference between classical inheritance (as seen in other languages like Java) and prototype inheritance in JavaScript?**

   - Classical inheritance uses classes and instances.
   - Prototype inheritance uses objects and prototype chains.

4. **How can you prevent properties from being inherited in JavaScript?**

   - Use `Object.create(null)` to create an object with no prototype.
   - Use `Object.hasOwnProperty` to check for properties directly on the object.

5. **How do you create an object that doesn't have a prototype?**

   - Use `Object.create(null)` to create a prototype-less object.

6. **What are some common pitfalls or issues with prototype inheritance?**

   - Overriding inherited properties can lead to unexpected behavior.
   - Circular references can cause memory leaks.
   - Understanding the prototype chain can be challenging for beginners.

7. **How can you extend built-in JavaScript objects using prototype inheritance?**

   - Add methods to the prototype of built-in objects like `Array.prototype`, `String.prototype`.

8. **What is the role of the `Object.create` method in prototype inheritance?**

   - Creates a new object with a specified prototype, allowing for precise control over inheritance.

9. **How do you achieve multiple inheritance in JavaScript?**

   - Use mixins to copy properties and methods from multiple objects into a single object.

10. **How does the `instanceof` operator work with prototype inheritance?**

    - Checks if an object is an instance of a constructor, considering the entire prototype chain.

11. **What is the difference between inheritance and delegation in the context of JavaScript prototypes?**

    - Inheritance: Objects inherit properties and methods from a prototype.
    - Delegation: Objects delegate property and method access to their prototype.

12. **Can you explain how the `Object.setPrototypeOf` and `Object.getPrototypeOf` methods are used?**
    - `Object.setPrototypeOf`: Sets the prototype (i.e., internal## Prototype Inheritance

## `this` Keyword

- What is `this`
- Difference in value of `this` in different contexts
- Global scope, methods, and arrow functions
- `call`, `bind`, `apply`

## Classes in JS

### Basic Syntax

JavaScript classes are a template for creating objects. They encapsulate data and behavior, making object-oriented programming more structured. The `class` keyword is used to define a class, and the `new` keyword is used to instantiate objects from the class.

A class typically consists of:

- A `constructor` method to initialize object properties.
- Methods to define behaviors.

### Class as Syntactic Sugar Over Function Constructors

Before ES6, JavaScript used function constructors and prototype-based inheritance to create and extend objects. The introduction of classes in ES6 provided a more intuitive syntax but did not change the underlying prototype-based inheritance mechanism.

Under the hood, JavaScript classes still rely on prototypes. The `class` keyword is just a more readable and structured way to define constructor functions and prototype methods.

Example:

- A function constructor with `prototype` can be rewritten using a class.
- Both achieve the same functionality but classes improve readability and maintainability.

### Strict Mode in Classes

All JavaScript class code executes in **strict mode** by default. This means:

- You **cannot** use undeclared variables.
- Assignments to read-only properties cause errors.
- Assigning to `this` without calling `super()` inside a subclass constructor throws an error.
- Deleting variables, functions, or arguments using `delete` is not allowed.

Unlike regular JavaScript code, you do not need to explicitly declare `"use strict";` in class definitions—it is automatically enforced.

### Function Constructor vs Classes

### **Function Constructor**

- A function constructor is a regular function used to initialize objects.
- Methods need to be explicitly assigned to `prototype` for shared behavior.
- Requires `new` keyword to create an instance.

### **Classes**

- Provide a more structured and modern way to define object templates.
- Automatically add methods to the prototype.
- Support inheritance using `extends` and `super`.

Classes make it easier to manage object-oriented code but function constructors still work under the hood.

### `constructor` Method

The `constructor` method is a special method inside a class:

- It is called automatically when an object is instantiated.
- Used to initialize instance properties.
- A class can have **only one** constructor.
- If no constructor is defined, JavaScript provides a default empty constructor.

For example:

- Assigning default values to instance properties inside the constructor.
- Using parameters to initialize object properties dynamically.

### `super` Keyword

The `super` keyword is used to call methods from a parent class:

- Inside a subclass constructor, `super()` must be called before using `this`.
- It invokes the parent class constructor to initialize inherited properties.
- `super.methodName()` can be used to call a method from the parent class.

Key rules:

- Calling `super()` is **mandatory** in subclass constructors before accessing `this`.
- Omitting `super()` results in a runtime error.

### Methods in Classes

JavaScript classes support instance methods:

- Methods are defined without the `function` keyword.
- They are automatically added to the class prototype, ensuring memory efficiency.

Types of methods:

1. **Instance Methods**: Defined inside the class and accessible via instances.
2. **Getter and Setter Methods**: Used to control access to object properties.
3. **Computed Methods**: Dynamic method names using expressions inside brackets.

Unlike object literals, class methods are **non-enumerable** by default.

### Private Variables in Classes

JavaScript introduced **private fields** in ES2020 using `#`:

- Private fields are **not accessible** outside the class.
- Prevent accidental modifications from external code.
- Only accessible within the class where they are defined.

### **Key Differences from Regular Properties**

- Private fields cannot be accessed or modified outside the class.
- They do not appear in `Object.keys()` or `JSON.stringify()`.
- They are not inherited by subclasses.

### Static Properties and Methods

Static properties and methods belong to the **class itself**, not instances:

- Used for utility functions, constants, or counters.
- Cannot be accessed via class instances.
- Called directly on the class.

**Common Use Cases:**

- Maintaining a counter shared across all instances.
- Creating utility functions that do not depend on instance data.

### `extends` Keyword (Inheritance)

The `extends` keyword enables **inheritance**:

- A subclass inherits properties and methods from a parent class.
- `super()` calls the parent constructor to initialize inherited properties.
- Subclasses can **override** parent methods.

**Key Benefits of Inheritance:**

- Code reuse: Common functionality is centralized in a parent class.
- Extensibility: Subclasses can add or modify behaviors.

### Mixins (Alternative to Inheritance)

JavaScript does not support multiple inheritance, but **mixins** allow sharing functionality across multiple classes.

A **mixin** is an object containing reusable methods that can be added to different classes using `Object.assign()`.

### **When to Use Mixins?**

- When multiple classes need the same functionality but do not share a common ancestor.
- When avoiding deep inheritance hierarchies.

Mixins provide **flexibility** without the limitations of classical inheritance.

### Overloading in JavaScript

JavaScript **does not support method overloading** in the traditional sense (like Java or C++).

### **Workarounds for Overloading:**

1. **Using Default Parameters**:
   - Functions can accept optional parameters with default values.
2. **Checking Argument Length**:
   - Methods can behave differently based on the number of arguments.
3. **Using Objects for Named Parameters**:
   - Passing an object allows flexible argument structures.

Although method overloading is not natively supported, these techniques enable similar functionality.

### `constructor === Object // true`

This statement is **incorrect** for class instances.

### **Why?**

- Every object in JavaScript has a `constructor` property that points to the function used to create it.
- Objects created with `{}` or `new Object()` have `constructor === Object`.
- Instances of classes have their `constructor` pointing to their respective class.

Thus, `constructor === Object // true` applies only to **plain objects**, not instances of custom classes.

### Summary

JavaScript classes provide a **cleaner, more structured** way to define objects and inheritance. While they are syntactic sugar over function constructors, they offer several advantages:

- **Better readability** and maintainability.
- **Built-in strict mode** for error prevention.
- **Easier inheritance** with `extends` and `super`.
- **Encapsulation** using private fields.
- **Static methods** for shared logic.
- **Flexibility** through mixins.

Although JavaScript does not support traditional method overloading or multiple inheritance, its prototype-based model provides alternative solutions.

## Async JS

- Callbacks
- Callback hell
- Promises over callbacks
- Promise chaining
- Promise methods
  - `all`, `allSettled`, `any`, `race`
- `async` / `await`
- Syntactic sugar
- Function suspends
- `async` returns a promise

## ES6 Features

- Classes
- `async` / `await`
- Rest and spread parameters
- `let`, `const`
- Default parameters
- Arrow functions
- Object literals
- Template strings
- `for..of`
- Symbols

## Misc

- How JS engine works
- Event loop
- Event bubbling / capturing
- Event delegation
- Debouncing
- Throttling
- Generators
- Garbage collection in JS
- Garbage collection in closures
- Web APIs
