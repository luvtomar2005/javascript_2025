//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.
const getStudentData = () =>{
    setTimeout(() => {
        console.log("My name is Luv Tomar");
        setTimeout(() =>{
            console.log("My Middle Name is Tomar");
            setTimeout(() => {
                console.log("My las name is Kuch Nahi");
                setTimeout(() =>{
                    console.log("I was born in Mathura");
                    setTimeout(() =>{
                        console.log("I love going to out of India");
                        setTimeout(() =>{
                            console.log("One day i will be securing the best package of my collge")
                        },1000);
                    },1000);
                },1000);
            }, 1000);
        })
    }, 1000);

}

getStudentData();

// For solving this problem of call back hell we use promises
