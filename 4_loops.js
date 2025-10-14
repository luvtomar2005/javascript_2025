// Conditional Statement
// IF statement
// The question if for checking eligibility for vote system according to age and citizenship
let age = 20;
let isCitizen = true;
let isRegistered = false;

if(age >= 18 && isCitizen && isRegistered){
    console.log("You are eligible to vote! ");
}
else if(age < 18){
    console.log("You are not eligible to vote");
}
else if(age >= 18 && !isCitizen){
    console.log("You are eligible to vote due to citizenship status.");
}
else if(age >= 18 && isCitizen && !isRegistered){
    console.log("You are not eligible to vote because you are not registered for voting");
}
else{
    console.log("You are not eligible to vote : ");
}


// Program to check whether a number is even or odd
var num1 = 8;
if(num1 % 2 == 0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}


// Program to check whether the number is positive or negative
var num1 = 10;
if(num1 > 0){
    console.log("Number is positive");
}
else{
    console.log("Number is negative  ");
}

// Switch Case Statement : Using switch to find the area of various shapes
let areaOfShapes = 'Square';
let a = 5;
let b = 10;
let r = 7;
switch(areaOfShapes){
    case  'Rectangle':
        console.log(`The area of Rectangle is :${a,b}`);
        break;
    case 'Circle':
        console.log(`The area of the Circle is : ${Math.PI * r * r}`);
        break;
    case 'Square':
        console.log(`The area of the Square is : ${a * a}`);
        break;
    default:
        console.log('Sorry , the shape if not avaiable : ');
        break;
}


//  While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition remains true.
//  The loop continues iterating while the condition is true, and it terminates when the 
// condition becomes false.
var n = 10;
var i = 1;
while(i <= n){
    console.log(i);
    i++;
}


//  Do while loop -: We use it when we want to guarntee the execution at least ones 
var num = 1;
do{
    console.log(num);
    num++;
}while(num <= 10);

// For loop -:  A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly 
// useful when you know the exact number of iterations needed
for (let i = 1; i <= 10; i++) {
    console.log(i);
        
}


//  Key Point:
// The initialization, condition, and iteration expressions are optional. You can omit any or all of them, but you must include the semicolons.
// The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {}.

// use case: Game Development:
// In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.

// Program to find the sum of numbers using for loop
var sum = 0;
for(let i = 1;i<=10;i++){
    sum += i;
}
console.log(`The sum of the numbers is ${sum}`);

// Program for calculating times table of 5 using while loop
var num = 5;
var i = 1;
while(i <= 10){
    console.log(`${num} X ${i} = ${num * i}`);
    i++;
}


// Program to check whether the year is leap year or not
var year = 2024;
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log(`The year ${year} is leap year`);
}
else{
    console.log(`The year ${year} is not leap year`);
}