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

let paragraphsAfterHeading = document.querySelectorAll('h2 + p');
paragraphsAfterHeading.forEach(p => console.log(p.textContent));

// Matches method 

let elements = document.querySelectorAll('.content *');

elements.forEach(element => {
    if(element.matches('.active')) {
        console.log('Found active element:', element);
    }
})

// Challenge 1: Select an element by ID and print it to the console
// TODO: Select the element with id 'actionButton' and print it

let actionButton = document.getElementById('actionButton');
console.log(actionButton);

// Challenge 2: Select all elements with a certain class and print all of them to the console
// TODO: Select all elements with class 'info' and print each one

let infoElements = document.getElementsByClassName('info');
for (let i = 0; i < infoElements.length; i++) {
    console.log(infoElements[i]);
}

// Challenge 3: Select elements by tag and print all of them to the console
// TODO: Select all <p> elements and print each one

let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
}

// Challenge 4: Select elements with a combination of tag name and class name, and print them
// TODO: Select all elements that are <span> with class 'highlight' and print each one

let highlightedSpans = document.querySelectorAll('span.highlight');
highlightedSpans.forEach(span => console.log(span));

// 

// Modifying DOM Elements 

// Changing text and HTML content 

let messageParagraph = document.getElementById('message');

messageParagraph.innerText = "This text has been changed with innerText element (no function, just variable)";

// innerHTML 

function placeholderChange() {
    console.log("innerHTML button is working");
    document.getElementById('placeholder-text').innerHTML = "The content has been changed using innerHTML";
}

function placeholderReset() {
    console.log("innerHTML reset button is working");
    document.getElementById('placeholder-text').innerHTML = "Placeholder text";
}

// Changing text with onclick, function and variable 

function updateText() {
    console.log("updateText button is working");

    let paragraphContent = document.getElementById('paragraph-text');

    paragraphContent.innerText = "This text has been changed with a JS Function";
}

function resetText() {
    console.log("resetText button is working");

    let paragraphContent = document.getElementById('modify-wrapped-text');

    paragraphContent.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iste eius enim provident at! Doloribus, rem obcaecati, fugit autem error harum totam ea, veniam itaque ex deleniti voluptatum vero quasi?";
}

// Add paragraph 



