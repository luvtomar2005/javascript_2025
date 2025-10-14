//* ============================
//* Data Types Section
//* ============================

//* Concatenation in JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

const str = "Hello " + "world";
console.log(str);


//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

const num1 = "5" + 5;
const num2 = "5" - 10;
console.log(num1); // we have used + so concatenation will be the result
console.log(num2); // here coercion will be the result




//* ============================
//* Tricky Interview Questions
//* ============================
console.log(10 + "20");
console.log(9 - "5");
console.log("Java" + "Script");
console.log(" " + " ");
console.log(" " + 0);
console.log("Luv " - "Tomar");
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);
