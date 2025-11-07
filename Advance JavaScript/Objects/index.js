//* ==============================
//* Object in JavaScript
//* ==============================
//? Objects are a fundamental part of JavaScript, providing a way to group related data and 
// functions together. In JavaScript, an object is a collection 
// of key-value pairs, where each key is a string (or a symbol) and each value 
// can be any data type, including other objects. Objects can have properties and methods, 
// making them versatile for various use cases.

//* ==============================
//* Creating Objects:
//* ==============================
//? There are several ways to create objects in JavaScript. The most common one is using object literals:
const product = {
  id: 1,
  pName: "laptop",
};

let person = {
  name: "Luv",
  age: 20,
  isStudent: false,
  greet: function () {
    console.log("Welcome to JavaScript learning");
  },
};

let person1 = {
  name: "Luv",
  age: 20,
  isStudent: false, // fixed property name
  greet: function () {
    console.log("Welcome to the JavaScript course");
  },
};
person.greet();
person1.greet();
//* =================================
//* Adding and Modifying Properties:
//* =================================
//? You can add new properties or modify existing ones:
person["job"] = "web dev";
person.age = 19;
// person[age] = 20;
console.log(person);


//* =================================
//* Methods:
//* =================================
//? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:

person.greet();
console.log(person.greet())
//* ========================================
//* We can add dynamic keys in an object
//* ========================================

let idType = "studentId";

let student = {
  [idType]: "A123456", // Dynamic key based on idType
  sName: "Vinod",
  sAge: 29,
  isStudent: true,
  greet: function () {
    console.log(
      `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
    );
  },
};

student.greet();

//? useCase: when we want to get the user name and value in react

//* =================================
//* Data Modeling:
//* =================================
//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.

// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   start: function () {
//     console.log("Engine started!");
//   },
// };

//* =====================================
//*  Interview Question
//* ======================================

// Pass by value vs pass by reference
// Pass by value -> When you assign or pass a primitive, JavaScript creates a completely separate copy of the value.
// Changes to one do not affect the other.

let x = 10;
let y = x;  // copy of value

y = 20;

console.log(x); // 10 (unchanged)
console.log(y); // 20


// pass by reference
let student1 = { name: "Luv", age: 20 };
let student2 = student1; // reference copy

student2.age = 25;

console.log(student1.age); // 25 (changed!)
console.log(student2.age); // 25
// If you want a new copy of an object (not just a shared reference), you can use: object.assign()

let studentA = { name: "Luv", age: 20 };
let studentB = Object.assign({}, studentA);
// or let studentB = { ...studentA };

studentB.age = 25;

console.log(studentA.age); // 20 (not affected)
console.log(studentB.age); // 25



//* =====================================
//* Comparison by Reference:
//* ======================================

//? Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

const obj1 = {name : "luv" , section : "q"};
const obj2 = {name : "luv" , section : "q"};
const isEqual = obj1 === obj2 ? true : false;
console.log(isEqual);

// It will only print true only if we direct copy the object
const obj3 = obj1;
const reallyEqual = obj3 === obj1 ? true : false;
console.log(reallyEqual);
//* =====================================
//* JSON (JavaScript Object Notation):
//* ======================================

//?JSON is a data interchange format derived from JavaScript objects
// . Objects can be easily converted to JSON and vice versa.

let student3 = {
  id: 1,
  sName: "Vinod",
  sAge: 29,
  isStudent: false,
  greet: function () {
    console.log(
      `hey my id is ${student.identity} & my name is ${student.sName}`
    );
  },
};

let jsonData = JSON.stringify(student);
console.log(jsonData);
let parsedObject = JSON.parse(jsonData);
console.log(parsedObject);

//* =====================================
//* "this" Object
//* ======================================

//? In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.
("use strict");

x = 5;
console.log(x);

function callme() {
  console.log(this);
}

// callme(); // try to run on browser console

//todo  Let's check the this keyword values in an object methods

//* Regular Function Expression:
const obj4 = {
  name: "Kodyfier",
  greet: function () {
    console.log(this);
  },
};

obj4.greet();

//* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
const obj5 = {
  name: "Kodyfier",
  greet() {
    console.log(this);
  },
};

obj5.greet();

//* Fat Arrow Function
const obj = {
  name: "thapa technical",
  greet: () => {
    console.log(this);
  },
};

obj.greet();

//* =====================================
//* Objects Useful Methods
//* ======================================

const product2 = {
  id: 1,
  name: "Laptop",
  category: "Computers",
  brand: "ExampleBrand",
  price: 999.99,
  stock: 50,
  description:
    "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
  image: "image link will be added during projects",
};

//? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.
let keys = Object.keys(product);
console.log(keys);
//? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.
let values = Object.values(product);
console.log(values);
//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.
let entries = Object.entries(product);
console.log(entries);
//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
console.log(product.hasOwnProperty("name"));
console.log(product.hasOwnProperty("image"));
//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
const target = {a : 1, b : 2};
const source = {b : 3 , c : 4};
const mergedObject = Object.assign({} , target,source);
console.log(mergedObject);
//? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
Object.freeze(product);
product.id = "abs";
console.log(product);
//* =====================================
//* Interview Question - Objects
//* ======================================

//! 1: What will be the output?

//* ===============================================
//* Interview Question - Object Manipulation:
//* ================================================
//! Problem: Given an object representing a student, write a function to add a new subject with its
//  corresponding grade to the student's record. Also check if the
//  grades property is present or not?
let aboutMe = {
  name : 'luv',
  lastname : 'tomar',
  grade : 'A',
  branch : 'Computer Science'
};

const addSubjectGrade = (student, subject, marks) => {
  if (!student.grades) {           // create 'grades' object if missing
    student.grades = {};
  }
  student.grades[subject] = marks; // dynamically add subject + marks
};

addSubjectGrade(aboutMe, "javascript", 92);
console.log(aboutMe);


//* ===============================================
//* Interview Question - Object Comparison:
//* ================================================
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// // Example usage:
let objA = { name: "Alice", age: 26, city: "New York" };
let objB = { name: "Alice", age: 26, city: "New York" };
let objC = { name: "Bob", age: 30, city: "San Francisco" };

console.log(areObjectsEqual(objA, objB)); // Should return true
console.log(areObjectsEqual(objA, objC)); // Should return false

//* ===============================================
//* Interview Question - Object Transformation:
//* ================================================
//! Problem: Write a function that transforms an array of an objects 
// into an object where the keys are the objects' ids.

// console.log(arrayToObj(inputArray));
// Should print: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }
