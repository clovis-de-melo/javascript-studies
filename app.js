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