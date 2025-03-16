// console.log("test console log");

// Change Paragraph text´s information

function changeParagraph() {
    document.getElementById('paragraph').innerHTML = "The content has been changed via JavaScript."
}

function resetParagraph() {
    document.getElementById('paragraph').innerHTML = "Click to change the HTML content below"
}

// Show & Hide content

function showContent() {
    document.getElementById('content').style.display = "block";
}

function hideContent() {
    document.getElementById('content').style.display = "none";
}

// Change Font Size

function changeFontsize() {
    document.getElementById('content-font-size').style.fontSize = "50px";
}

function resetFontsize() {
    document.getElementById('content-font-size').style.fontSize = "16px";
}

// Change Font Color

function changeFontcolor() {
    document.getElementById('content-font-color').style.color = "red";
}

function resetFontcolor() {
    document.getElementById('content-font-color').style.color = "black";
}

/* alert("test alert") */

// Event Handling 
// Event Listener

// Using onclick function

function convert() {
    console.log("convert button is working");
}


// Using ID

/* let convertButton = document.querySelector("#convert-Button")

document.addEventListener("click", () => {
    convert()
}) */

// Get input information 

/* let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    console.log("type USD field is working")
    console.log(usdInput.value)

})

brlInput.addEventListener("keyup", () => {
    console.log("type BRL field is working")
    console.log(brlInput.value)
}) */

// Show date and time 

function showDateAndTime() {
    document.getElementById('date-and-time').innerHTML = Date();
}

function hideDateAndTime() {
    document.getElementById('date-and-time').style.display = "none";
}

// Currency Converter 

let dolar = 5.84

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {

})

brlInput.addEventListener("keyup"), () => {

}

