// DOM (Document Object Model)

// JavaScript DOMis the programming interface that allows you to manipulate elements of a web page using the JavaScript programming language. 

// The DOM is a structured representation of an HTML, XML, or SVG document. 

// The DOM is a programming interface that allows scripts to interact with the structure, content, and style of web documents. 

function buttonJS(){
    console.log("JavaScript button is working");
}

// querySelector 

let header = document.querySelector('#dashboardHeader');
console.log(header.textContent);

let firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent);

let headingThree = document.querySelector('h3');
console.log(headingThree.textContent);