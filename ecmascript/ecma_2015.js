
//! ==========================================
//!  Part 2 of Modern JavaScript
//! =========================================

// const { useImperativeHandle } = require("react");

//* =========================================
//*  Object Properties - Modern JavaScript
//* =========================================
// const name = "vinod";
// const age = 30;

//? traditional way
// const person = { name: "Luv", age: 18 };
// Using this shorthand way
const name = "Luv";
const age = 19;
const person = {name , age};
console.log(person);

// Instead of specifying name: name and age: age, you can simply use name 
// and age directly within the object literal, thanks to ES6 shorthand property notation.

//* ==========================================
//*  Destructuring - Modern JavaScript
//* =========================================
//? Destructuring in JavaScript is a way to extract values from arrays or objects and
//  assign them to variables in a concise and readable manner.
//? Use Case: Makes code cleaner and avoids repetitive copying of values.

//* Destructuring Arrays:
// Destructuring is a JavaScript expression that makes 
// t possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

//? 1: Extracting specific elements:
const numbers = [10, 20, 30];
// const first = numbers[0]; // Traditional way
const [first,second,third]= numbers;
console.log(second);

//? 2: Ignoring elements:
// const [, , third] = numbers;
// console.log(third);
const[, , third2] = numbers;
console.log(third2);
//! Interview Questions
//! Write a program to swap two variables without using 3rd variable?

// a=30, b=10
// Swapping using the third variable
// let c = b; 
// b = a;
// a = c;
// Now without using the third variable
let a = 5;
let b = 6;
[a,b] = [b,a];
console.log(a,b);


//* Destructuring Objects:
const user = {naam : "Luv" , umar : 20};
// we will see the real life use of it in our main project of weather app

//? Extracting properties:
const myName = user.name; // Traditional way 
// const {naam,umar} = user;
// console.log(umar,naam);

//? Renaming properties:
const {naam : fullNaam , umar} = user;
console.log(fullNaam);


//* ==========================================
//*  Spread Operator - Modern JavaScript
//* =========================================
// JavaScript ES6 (ECMAScript 6) introduced the spread operator. 
// The syntax is three dots(...) followed by the array (or iterable*).

//? 1. Copying an array
let fruits = ["Apple" , "Orange" , "mango", "banana"];
let newFruits = [...fruits];
console.log(fruits);


//? 2: Concatenating arrays / Combining arrays
const numbers1 = [1,2,4,5];
const numbers2 = [4,6,7,8];
const newNumbers = [...numbers1 , ...numbers2];
console.log(newNumbers);

//? 3: Adding Elements to existing array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// // fruits.push("guava", "grapes");
// fruits.push("guava" , "grapes");
fruits.push(...['guava' , "grapes"]);
console.log(fruits);


//! One more useCases
//? In JavaScript, when you spread a string
//  using the spread syntax (...), it converts
//  the string into an array of its individual characters.

//? Traditional way
const country = "Pakistan";
console.log(country.split(""));


//? New way of doing it
const city = "Lahore";
console.log([...city]);

//* ==========================================
//*  Rest parameters  - Modern JavaScript
//* =========================================
//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept varying numbers of arguments.
// traditional way of doing it 
const sum = (a,b,c,d) =>{
    return a + b + c + d;
}

// by using rest parameters
const sum2 = (c,d,...numbers) =>{
    console.log(typeof numbers);
    return numbers.reduce((accum, currVal) =>(accum + currval)  , 0 );
}

console.log(1,2,3,4);


//TODO NOTE: A function definition can only have one rest 
// parameter, and the rest parameter must be the last parameter
//  in the function definition.
// function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg2, arg3) {}
