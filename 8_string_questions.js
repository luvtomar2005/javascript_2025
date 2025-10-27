// Write a javascript program to print form a to z  in the console
function printAlphabets(params) {
    for(let i = 97;i<=122;i++){
        console.log(String.fromCharCode(i));
    }
}
printAlphabets();

// For printing in single
function printingInSingleLine(){
    let result = "";
    for (let index = 97; index < 123; index++) {
        result += String.fromCharCode(index);
        
    }
    console.log(result);
}
printingInSingleLine();

// Q2 : Write a javascript program to check whether the vowels are present in string or not
// Function to check if vowels are present in a string
function hasVowel(str){
    const vowels = "aeiouAEIOU";

    for(let char of str){
        if(vowels.includes(char)){
            return true; // vowel found
        }
    }
    return false;
}

let str = "Luv";
if(hasVowel(str)){
    console.log("Vowel is present in the string");
}
else{
    console.log("Vowel is not present in the string");
}

// Q3 : Function to check if all vowels are present in a string
function hasAllVowels(str){
    let vowels = "aeiou";
    let lowerStr = str.toLowerCase();
    for(let vowel of vowels){
        if(!lowerStr.includes(vowel)){
            return false; // If any vowel is missing
        }
    }
    return true;
}

let text2 = "education";
let text4 = "hello";
console.log('education ->' , hasAllVowels(text2));
console.log('hello ->' , hasAllVowels(text4));

