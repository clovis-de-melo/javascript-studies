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

function whateverName () {
    const myConst = 'valor'
}

// variables created outside the function block can be accessed 
// variables created inside the function block cannot be accessed outside the block. they can only be accessed inside the block 

// how to export a const create inside a function (return)

function getAge () {
    const age = 36
    return age
}

function getNumber () {
    return 5
}

const result = getNumber() + 2 
console.log(result)

// Parameters and Arguments 
// Argument is a value added when the function is invoked E.g: somar(1, 1) somar(4, 3)
// Parameter is a variable that receives the value as an argument

function somar () {
    return 1 + 1
}

somar() 
console.log(somar())

// 

function sumNumbers (x, y) {
    return x + y
}

console.log(sumNumbers(1, 1))

// 

// Function declaration and Function expression assigned to a variable 


