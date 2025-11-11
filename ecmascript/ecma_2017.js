//* ==========================================
//*    ECMAScript Features (2017) / ES8
//* =========================================

//? List of new useful features added in ES8  👇
// String padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Async functions

//* =====================
//*  String padding
//* =====================

//? String padding in JavaScript is a way to add 
// extra characters (like spaces) to a string to make it a specific length.

//todo  Use Case: Makes formatting text easier and more predictable, 
// especially for tables, alignments, and UI elements. No more messy,
//  uneven lines disrupting your visual spells!

const name = "luv";
const paddedName = name.padStart(12);
console.log(paddedName);

//? Using padEnd() to pad from the end:
const lastName = "Tomar";
const paddedName2 = lastName.padEnd();
console.log(paddedName2);
//todo Key points:
//? Both padStart() and padEnd() create a 
// new padded string without modifying the original one.

//? They take two arguments:
//?   - targetLength: The total length of the padded string.
//?   - padString (optional): The string to use for padding (defaults to spaces).

//? If the original string is already longer than or 
// equal to targetLength, it's returned as-is.

//* =====================
//*  trailing commas
//* ====================
//? This feature allows to have 
// trailing commas in function declarations, 
// functions calls, array literal & object literal:
// Simple si baat hai hum nahi jaante maybe in future we have to add one more function to our method so that's why we use this trailiing commas

function greet(name2,age,boolean){
    console.log(`Hello ${name2} and your age is ${age}`);
}
greet("justin" , 18 , true ,);
// // Object literal
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

//* ======================================
//*  Object.entries() & Object.values()
//* ======================================
//? We have already covered in our Objects Section.


