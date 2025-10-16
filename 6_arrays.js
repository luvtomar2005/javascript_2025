//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single 
// variable. It is a versatile and dynamic object. 
// It can hold various data types, including numbers, 
// strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e.
//  the first element is accessed 
// with an index 0, the second element with an index of 1, and so forth.

//  Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

// Arrays using constructor
let fruit1 = new Array('mango' , 'orange' , 'banana','watermelon');
console.log(fruit1[3]);

// Array using literals
let fruit = ['mango' , 'orange' , 'banana' , 'watermelon'];
console.log(fruit[0]);

// Creating an empty array
let fruit2 = [];
fruit2[0] = "apple";
console.log(fruit2[0])

//  Array Traversal / Iterating Over Arrays
//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, 
// such as arrays, strings, or other iterable objects.
let students = ['luv' , 'shobhit' , 'aman' , 'yash' , 'manni' , 'armaan'];
for(let student of students){
    console.log(student);
}

// For in loop -: This loop will give us the index of the elements of the loop 
for(let student in students){
    console.log(student);
}



// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once
//  for each element of the array. The provided function may 
// perform any kind of operation on the elements of the given array.

students.forEach((currStundent,index,arr) => {
    console.log(`${index} ${currStundent}`)
});

// ? 4: map function
//* map() creates a new array from calling a function for
//  every array element. map() does not change the original array.
students.map((currStudent , index, arr) =>{
    console.log(currStudent);
})

// Interview question what is difference between foreach and map method 


let myFirstArr = students.forEach((currStundent,index,arr) => {
    return `${index} ${currStundent}`;
});

console.log('forEachResult' ,myFirstArr);


let mySecondArr = students.map((currStundent,index,arr) => {
    return `${index} ${currStundent}`;
});
console.log('mapResult' , mySecondArr);

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
let list1 = ['linkedlist' , 'array', 'stack' , 'queue' , 'trees' , 'graphs'];

//? 1: push(): Method that adds one or more elements to the end of an array.
console.log(list1.push('list'));
console.log(list1);
//? 2: pop(): Method that removes the last element from an array.
console.log(list1.pop());

// //? 3: unshift(): Method that adds one or more elements to the beginning of an array.
console.log(list1.unshift());
console.log(list1);
//? 4: shift(): Method that removes the first element from an array.
console.log(list1.shift());
console.log(list1);


// The splice() method of Array instances changes the 
// contents of an array by removing or replacing existing elements
//  and/or adding new elements in place
let newList = ['one' , 'two', 'three' , 'four'];
newList.splice(0 , 1);
console.log(newList);
// In this code splice removes all the elements from that index to 1 onwards


// Some more methods in JAVASCRIPT
let myArr = [1,2,3,4,5,6];
const result = myArr.indexOf(2); // This will give us the first ocurrence of index of 2 
console.log(result); 
let myArray = [1,2,3,4,5,5,5,5];
const result1 = myArray.lastIndexOf(5); // This will give us the last occurence of index of 5
console.log(result1);
console.log(myArray.includes(7));


// Using filter and find method -: Theyy both have same syntax like map method
let value = [1,2,3,4,5,6,7,8];
const result2 = value.find((number) =>{
    return number>4;
})
console.log(result2);

// Using filter method -: Unlike find method it will give us all value 
let values = [10 , 212, 1214,1414, 242414,142142];
const result4 = values.filter((nums) =>{
    return nums > 212;
})
console.log(result4);