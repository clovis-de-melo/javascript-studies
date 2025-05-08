// DOM (Document Object Model)

// JavaScript DOM is the programming interface that allows you to manipulate elements of a web page using the JavaScript programming language. 

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

// querySelectorAll forEach

let menuItems = document.querySelectorAll('ul > .menu-item');
menuItems.forEach(item => console.log(item.textContent));

let firstParagraphs = document.querySelectorAll('section > p:first-child');
firstParagraphs.forEach(paragraph => console.log(paragraph.textContent));

let lastListItems = document.querySelectorAll('ul > li:last-child');
lastListItems.forEach(item => console.log(item.textContent)); 

let emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => console.log(input.placeholder));

let thirdListItems = document.querySelectorAll('ul > li:nth-child(3n)');
thirdListItems.forEach(item => console.log(item.textContent));

