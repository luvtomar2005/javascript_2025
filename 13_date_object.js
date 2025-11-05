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

// You can get the various components of date using the date object
const currentDate2 = new Date();
const year  = currentDate2.getFullYear();
console.log(year);
const month = currentDate2.getMonth();
console.log(month);
const day = currentDate2.getDay();
console.log(day);
const date = currentDate2.getDate();
console.log(date);

// Javascript set time methods
const date6 = new Date();
date6.setHours(10);
console.log(date6); //  Date object set the hours to 10

console.log(date6);

date6.setMinutes(30);
console.log(date6);

date6.setSeconds(400);
console.log(date6);

// A few useful methods in of the Date object 
// JavaScript Date formatting methods

const date7 = new Date();

// 1️⃣ Returns only the date portion (according to your locale)
const localDate = date7.toLocaleDateString();
console.log("Locale Date:", localDate);

// 2️⃣ Returns only the time portion (according to your locale)
const localTime = date7.toLocaleTimeString();
console.log("Locale Time:", localTime);

// 3️⃣ Returns both date and time together (according to your locale)
const localDateTime = date7.toLocaleString();
console.log("Locale Date & Time:", localDateTime);

// 4️⃣ To verify the original Date object (unchanged)
console.log("Original Date Object:", date7);
// Interview question
// q1 -> Write a function to 7 days to a specified given date
const addDaystoDate = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
const date8 = new Date("2025-03-22");
const newDate9 = addDaystoDate(date8,7);
console.log(newDate9); 

// q2 -> Write a function to calculate the difference between two dates

const getDifference = (d1, d2) =>{
    let oneDay = 24*60*60*1000;
    let diff = d2 - d1;
    return Math.round(diff/oneDay);

}

const newDate1 = new Date("2025-04-12");
const newDate2 = new Date("2025-04-22");
console.log(getDifference(newDate1,newDate2));
