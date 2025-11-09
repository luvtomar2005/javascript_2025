
// Synchronous code executes line by line, 
// blocking further execution until each line is completed,
// while asynchronous code allows other code to continue executing
// while it waits for an asynchrounous operation to complete

// The code below is synchrounous behaviour

const fun2 = () =>{
    console.log("func2 starts and ends");
}

const func1 = () =>{
    console.log("Func1 is start");
    fun2();
    console.log("function 1 ends");
}

// Now this is asynchrounous behaviour
const func3 = () =>{
    setTimeout(() =>{
        console.log("Func2 starts and ends");

    } , 2000);
}
const fun1 = () =>{
    console.log("Fun1 starts");
    func3();
    console.log("fun1 ends");
}
fun1();

