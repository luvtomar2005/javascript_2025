//* ===============================
//* Function in JavaScript
//* ==============================
//? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

//  3 students at a time wants to find the sum of two numbers

// 1st student

//* ===============================
//* Function Declaration:
//* ==============================

//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defines the function and specifies what code should be executed when the function is called.

// function greet() {
//   console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
// }

//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

//?After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

//? How to call a function
// greet();

//! Practice Time
//! 1. Write a function to find the sum of two numbers.

//todo Tips "1st declare the function & then call it" In JavaScript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

// Function definition

// Calling the function

//* ==============================
//* Function Parameter:
//* ==============================

//? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }

//* ==============================
//* Function Argument:
//* ==============================

//? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);

//! Practice Time
//? Let's say we want to greet students with one same line
//! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".

//! 1. Write a function to find the sum of two numbers with parameters.

//* ==============================
//* Function expressions
//* ==============================
//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

//* ==============================
//*  Anonymous Function
//* =============================
//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

//* ==============================
//*  Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

// Program to greet the students
function greetStudent(name){
    console.log(`Hello ${name} How are you ???`);
}
greetStudent("Luv");
greetStudent("Renu");
greetStudent("Devendra Singh Tomar");

function sumOfTwo(a , b){
    return a + b;
}
var result = sumOfTwo(10,2);
console.log(`The result of the sum of the two numbers is ${result}`);

// IFFE -> Immediately Invoked Function Expression

(function sum(a,b){
    console.log("Sum is:", a + b);
})(5,10);

//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns
//  the result of the operation. The function should support addition,
//  subtraction, multiplication, and division.

function calculator(num1,num2,operator){
    var result;
    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if(num2 != 0){
                result = num1/num2;
            }
            else{
                return "Error : Divison by zero! ";
            }
            break;
        default:
            return "Error : Invalid operator!";
    }
    return result;
}
console.log(calculator(10,5,'+'));
console.log(calculator(10,5,'-'));
console.log(calculator(10,5,'*'));
console.log(calculator(10,5,'/'));
console.log(calculator(10,5,'^'));


// Program to check whether a stirng is palindrome or not 
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }

  return true; // Palindrome
}

// Example usage
let test1 = "madam";
let test2 = "hello";

console.log(`${test1} is palindrome?`, isPalindrome(test1)); // true
console.log(`${test2} is palindrome?`, isPalindrome(test2)); // false
