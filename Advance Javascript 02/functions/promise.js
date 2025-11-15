const pr = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("Hello i miss you");
    }, 2000);
})
.then((res) =>{
    console.log(res);
})
.catch((error) =>{
    console.log(error);
})
.finally(() =>{
    console.log("Hope you are doing fine in your life ");
})


// Another code on promises
const studentName = "Luv";

const enrollStudent = (studentName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccessful = Math.random() > 0.4;

            if (isSuccessful) {
                resolve(`Enrollment successful for ${studentName}`);
            } else {
                reject(`Enrollment failed for ${studentName}. Please try again.`);
            }
        }, 2000);
    });
};

enrollStudent(studentName)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
        console.log("Enrollment process completed");
    });



const promise1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("First") , 20)
});

const promise2 = new Promise((resolve) =>{
    setTimeout(() => resolve("Second") , 20);
})
const promise3 = new Promise((resolve) =>{
    setTimeout(() => resolve("Third") , 20);
})

Promise.all([promise1 , promise2, promise3]).then((values) =>{
    console.log(values);
}).catch((error) =>{
    console.log(error);
});


