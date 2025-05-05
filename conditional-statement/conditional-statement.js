// Conditional Statement 

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

let year = 1987;

if (year >= 1988) {
    console.log("You are old enough, keep going.")
} else {
    console.log("You do not have at least 36 years.")
}

let person = "John";



if (person == "John") {
    console.log("Welcome to the system, John")
} else {
    alert("You must have admin access.")
}

var answer = window.prompt("Type Yes, No or Maybe. Then click Ok.");
if (answer === "Yes") {
    console.log("You said yes");
} else if (answer === "Maybe") {
    console.log("You said maybe")
} else if (answer === "No") {
    console.log("You said no");
} else {
    console.log("Could not get your answer");
}


// Conditionals If

var answer = window.prompt("Second prompt: Type YES, NO, or MAYBE. Then click OK.");
if (answer === "YES" || answer === "NO"){
    console.log("Yes || No is working")
}
if (answer === "YES") {
    console.log("You said YES!");
}
else {
    console.log("")
}

// Conditionals: Switch 

var answer = window.prompt("Third prompt: Type YES, NO, or MAYBE. Then click OK.");
switch (answer) {
    case "YES":
        console.log("Switch says: The answer is YES");
        break;
}