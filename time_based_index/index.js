//* =========================================
//*  Timing Based Events in JavaScript
//* =========================================

//* 1. setTimeout:
//? The setTimeout function is used to execute a function or code block after a specified delay in milliseconds.


function delayedFunction(){
    console.log("This function was delayed by 2000 milliseconds ( 2 seconds).");

}
setTimeout(delayedFunction, 2000);
function delayedFunction2(x){
    console.log("The function is delayed by 5000 seconds" , x);

}
setTimeout(() => delayedFunction2(5) , 5000);


//* 2. setInterval:
//? The setInterval function is used to repeatedly execute a function or code block at a specified interval in milliseconds.

//? ex- mind game of counting seconds on mind and after every 5secs we need to draw a straight line on paper.
// and it will continue till I told you to stop
function repeatedFunction(){
    console.log("This function will be repeated every 1000 milliseconds (1 second)");
}

// setInterval(repeatedFunction , 10);


//* 3. Clearing Timeout with clearTimeout:
//? If you want to cancel a scheduled timeout before it occurs, you can use the clearTimeout function.

//? The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

// Syntax:
//* clearTimeout(timeoutID);
function delayedFunction3(){
    console.log("This function was delayed by 2000 milliseconds(2 seconds)");
}
const myWork = setTimeout(delayedFunction3 , 2000);
clearTimeout(myWork);


//todo Cancel the timeout before it occurs

//* 4. Clearing Interval with clearInterval:
//? If you want to cancel a scheduled interval before it occurs, you can use the clearInterval function.

//? The global clearInterval() method cancels a timeout previously established by calling setInterval().

// Syntax:
function repeatedFunction(){
    console.log("This function repeats every 1000 millisecond(1second)");
}
const IntervalId = setInterval(repeatedFunction, 1000);
cleartInterval(IntervalId);

