// JS String

// Strings are for storing text. Strings are written with quotes

// A JavaScript string is zero or more characters written inside quotes.

// Strings created with single or double quotes work the same.

// There is no difference between the two.

console.log(12);

let text = "John Doe";
console.log(text);


// Quotes inside quotes 

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string

console.log("This is Joe's favorite string");
// console.log("This is Joe's "favorite" string"); // This will not work 
console.log("This is Joe's \"favorite\" string");
// console.log("This is Joe's \"favorite"\ string"); // This will not work 
console.log("This is Joe's 'favorite' string");


let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; 

/* document.getElementById("string-demo").innerHTML = answer1;

console.log(answer1);
console.log(answer2);
console.log(answer3); */


// String Properties 

var myString = "Welcome to the String course tutorial";

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.charCodeAt());
console.log(myString.valueOf());

