//* -------------------------
//*  Scope in JavaScript
//* -------------------------
//? Scope in JavaScript refers to the context in which variables are declared and accessed. It defines the visibility and lifetime of variables. When a variable is declared, it is bound to a specific scope, and its accessibility is determined by that scope.

// todo We have a Global Scope, Function Scope and Block Scope

//* -------------------------
// * Lexical Scoping:
//* -------------------------
// ? Lexical scoping is a way of managing variable access in JavaScript based on the physical structure of the code.

//? Key Concept: The scope of a variable is determined by its position in the source code, specifically where it is declared.

//? Lexical scoping in JavaScript is like a set of rules that determines where a variable can be used in your code. It follows the physical structure of your code, so if a variable is declared inside a function or block, it can usually be used only within that function or block.

var a = 5;
var b = 10;
// Now here what will you say whenone asked you what is the value of a ? you will see by your eyes and will say
// That a is 5 that is what lexical scoping is 
//* -------------------------
//  * Scope Chaining:
//* -------------------------
//? Definition: Scope chaining is the process by which JavaScript, when looking for the value of a variable, checks the current scope and then looks in the outer (enclosing) scopes until it finds the variable or reaches the global scope.

//todo Key Concept: Variables in inner scopes have access to variables in their outer scopes, creating a chain of accessible scopes.

// * Global Scope:
//? Variables: Variables declared outside of any function or block have global scope.
//? Access: Global variables are accessible from any part of the code, including inside functions and blocks.

const globalVariable = "I am a global variable";
function myFunction(){
    // This is the function scope
    const functionVar = "I am function variable"
    if(true){
        // Now this is the block scope
        var block = "I am a block variable";
        console.log(block);
        console.log(functionVar);
        console.log(globalVariable);
    }
    console.log(block);
}
myFunction();
console.log(globalVariable);
console.log(functionVar);
console.log(block);

