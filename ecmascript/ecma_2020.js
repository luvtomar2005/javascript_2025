//* ==========================================
//*    ECMAScript Features (2020) / ES11
//* =========================================

//? List of new useful features added in ES8  👇
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled

//* ===================
//*  BigInt
//* ================
//? BigInt: BigInt in JavaScript is a
//  data type used to represent and perform 
// operations on large integers that exceed the limits of regular numbers.

//? Creating BigInts:
//? - Using the `n` suffix:

// Using the BigInt() constructor:
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// console.log(anotherLargeNumber);

//* =======================================
//*  Nullish Coalescing Operator ??
//* ===================================
//? In JavaScript, the nullish coalescing operator (??) is a logical operator that 
// provides a concise way to handle nullish (null or undefined) values. 
// It returns its right-hand operand when its left-hand operand is null or
//  undefined, otherwise, it returns the left-hand operand.
let favNum = null;
userFavNum = favNum ?? 10;
console.log(userFavNum);
// If the left operand is falsy it returns the value as 10 which is the right hand side vlaue



//* =======================================
//*  Optional Chaining Operator (?.)
//* ===================================
//? It provides a concise way to access propertie
// s of an object without worrying about the existence
//  of intermediate properties. It's particularly useful 
// when working with nested objects or accessing properties 
// of objects that may be null or undefined.

const person = {
  name: "John",
  address: {
    city: 0,
    zipCode: 12345,
  },
};

const city = person.address?.city ?? "City not available";
console.log(city);

//? One more example
// The optional chaining operator can be
//  chained multiple times to access deeply nested properties:

//* =======================================
//*  Promise.allSettled()
//* ===================================
//? We will cover later in our Promises section part of the video and you gonna love that part.
