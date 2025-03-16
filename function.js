// Function 

// input: data that we can send to the function (as long as we want to)
// process
// output: result or return 

function addition(a, b) { 
    let result = a + b;
    return result 
}

let x = addition(15, 5);
let y = addition(2, 8);

console.log(x);
console.log(y);

// Arrow Function 

let subtraction = (a, b) => {
    let result = a - b 
    return result
} 

let z = subtraction(50, 20);
console.log(z);

// Roger Melo | JavaScript (YouTube Channel)

// () 

// {} function´s block: this where we put the function´s content  

// value that represents the lack of value

function nome () {

}

// Evoke, call or execute a function 

nome()

console.log(nome()) // undefined   
console.log(nome) // [Function: nome]

//

let numero = 1 

function increment () {
    numero++ 
}

increment()

console.log(numero) // 2

increment()
increment()
increment()

console.log(numero) // 5 

// functions create scope 
// scope is the visibility of a value 

function x () {
    const myConst = 'valor'
}

