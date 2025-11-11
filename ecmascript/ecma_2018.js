//* ==========================================
//*    ECMAScript Features (2018) / ES9
//* =========================================


//? List of new useful features added in ES8  👇
// Rest/Spread Properties
// Promise.prototype.finally()

//* ============================
//*  Rest/Spread Properties
//* =============================

//? ES6 introduced the concept of a rest element when 
// working with array destructuring:

// const numbers = [1, 2, 3, 4, 5];
// [first, second, ...others] = numbers;

// and spread elements:
// const numbers = [1, 2, 3, 4, 5]
// const sum = (a, b, c, d, e) => a + b + c + d + e
// const sumOfNumbers = sum(...numbers)

//* ES2018 introduces the same but for objects.

//? Object and Rest Operator
// const student = {
//   age: 10,
//   name: "vinod",
//   isStudent: true,
// };
const student = { name: "Luv Tomar", age: 20, isStudent: true };
const { age, ...others } = student;
console.log(age);     // 20
console.log(others);  // { name: 'Luv Tomar', isStudent: true }

//? Object and Spread operator
const obj1 = {a : 19 , b : 20, c : 21};
const obj2 = {c : 19 , d : 23, e : 25};
const newObj = {...obj1 , ...obj2};
console.log(newObj);


//* ============================
//*  Promise.finally()
//* =============================
//? We will cover later in our Promises section part of the video and you gonna love that part.
