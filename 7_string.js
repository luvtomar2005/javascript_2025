let str = 'My name is Luv Tomar "I am lovely"'
console.log(str);

let text = "Luv Tomar";
console.log(text.indexOf("Tomar"));
// Only give the output for first letter T

// Array.from method -: The array.from method returns the an array from the object
let strArr = Array.from(text);
console.log(strArr);

// Printing elements along with index
let newArr = strArr.map((currElement,index) =>{
    return `${currElement} - ${index}`
});
console.log(newArr);


let text2 = "Hello this is JavaScript here and I am saying JavaScript I Mean me is the best programming language";
let index = text2.indexOf('JavaScript');
let index3 = text2.lastIndexOf('JavaScript');
console.log(index);
console.log(index3);

let text3 = "JavaScript is a case sensitive language and we have to be careful about it ";
let result2 = text3.search('javaScript');
console.log(result2);

let text4 = "I study in GLA University";
let result4 = text4.match("GLA");
let result5 = text4.match(/Gla/gi);
console.log(result5);
let matchResult = text4.matchAll("GLA");
// Here Javascript converts the normal text into regular expression and also add global flag(g)
// at the end
console.log(matchResult);

let text5 = "I love coding";
let result6 = text5.includes('me');
console.log(result6);
let result7 = text5.startsWith('I');
console.log(result7);

let result8 = text5.endsWith('coding');
console.log(result8);


// Slice method returns the extracted part of the string and returns the extracted part 
//in the new string but does not include the last part of the string
let text7 = "I am your millionaire";
let result9 = text7.slice(6,9);
console.log(result9);


// substrig method extracts the portion of the string based on starting and ending indices
// camel case is used to seperate the words but substring is considered as the single word
let text8 = "Luv Tomar";
console.log(text8.substring(1,9));
console.log(text8.charAt(8));