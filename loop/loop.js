// Loop 
// is a code that can be used several times 
// there are several types of loops

let list = [10, 20, 30, 40]

for(let item of list) {
    console.log(item)
}

let recipe = ["sugar", "water", "salt", "chocolate"]

for(let item of recipe) {
    console.log(recipe)
}

//

for (let i = 0; i < 10; i += 1) {
    console.log(i)
}

// Very common use case: looping over an arrey 

var pageNames = [
    "Home",
    "About us",
    "Contact us",
    "JavaScript Playground",
    "News",
    "JavaScript Loop",
    "Blog"
];

for (i = 0; i < pageNames.length; i += 1) {
    if (document.title === pageNames[i]) {
        console.log("We are here: " + pageNames[i]);
    break;    
    } else {
        console.log("We are not here: " + pageNames[i]);
    }
}    
    
