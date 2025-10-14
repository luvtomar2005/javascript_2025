//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
var favNum = 123;
console.log(typeof(favNum));

//? String: Represents a sequence of characters enclosed in single or double quotes.
var myName = "Luv Tomar"
console.log(typeof(myName))

//? Boolean: Represents a logical entity with two values: true or false.
var isRaining = true;
console.log(typeof(isRaining));

//? undefined: Represents the absence of a value or an uninitialized variable.
var luv;
console.log(typeof(luv));

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
var yourName = null;
console.log(typeof(yourName));

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).

const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓
// Null -: Imagine you have a box but it is null , it means there is nothing inside there
// there are not any toys there. It's not that box is broken it means there is nothing there 
// interesting inside there in box 

// Undefined -: Imagine you have a box but have not opened it yet.. means you have box it but have
// not touched it yet... You know box is there but you have not anything inside or looked what 
// to see what's in there...

//? 2: What is the purpose of typeof operator in JavaScript❓

// ans -: It's tell us the datatype of the variables ..


//? 3: What is the result of `typeof null` in JavaScript❓

// It will be object...  It's a bug



//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
var hisName = "Ram";
console.log(typeof(hisName));
console.log(typeof(+hisName));
//? 6: Convert a number to a string?
// We just need to add an empty string after the number
var str = 4;
console.log(typeof String(str));
console.log(typeof (str+ " "));

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓
// Any value which are true are known as truthy values
// Such as true , non empty string , non empty array

// Values which are false are called falsy values
// such as false , 0(zero) , empty string , null , NaN , undefined....
//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString, 10);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

// //! Here are more examples
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)

// //! When we will not get an Output
console.log(parseInt("&123"));
console.log(parseInt("-123")); // This will give same output -123 because -123 is a number
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript
// Whenver you are using a value which will is not number so in that we must have some output values 
// so in that case javascript give us the output as NaN....

console.log(parseInt("abx"));
console.log(parseInt("3092y09423"));
if(NaN == NaN){
    console.log("Both are equal");
}
else{
    console.log("Both are not equal");
}
// The output will be both are not equal the reason is that we have no idea from where we are getting
// the NaN value both can come from different region like in this case one is coming from abx and other one is coming from 
// 3092y09423

//* ========== parseInt & parseFloat End Section ==========
