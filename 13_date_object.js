// Date and object 
// Date constructor creates date object when called the object it returns the time stirng 


// There are 9 ways to create a date object
const currentDate = new Date();
console.log(currentDate);

// This is ISO format in which is standard representation of date and time In this format 
// date is reprsented together , seperated by letter "T" and THe letter "Z" indicates the time in
// in UTC(Coordinated universal time )
// But the same on running browser give the human readable time

// new Date(string) -> creates a date object based on the provided date string
const dateString = "2025-11-05T02:50:20.646Z";
const dateFromString = new Date(dateString);
console.log(dateFromString);

// new Date(year, month ) -> Create a date object with specified year and month
const date1 = new Date(2025 , 2);
console.log(date1); 

// new Date(year, month, day) -> creates a date object specified year, month  and day
const date2 = new Date(2025 , 2, 23);
console.log(date2);


// new Date(year, month ,day, hour)
const date3 = new Date(2025,2,23,10);
console.log(date3);

const date4 = new Date(2025,4,21,19,12);
console.log(date4);


const date5 = new Date(2025,4,21,19,12,34);
console.log(date5);

// Javscript get date methods


