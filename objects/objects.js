// JS Objects 

// A JavaScript object is a collection of key-value pairs, where keys are strings (or symbols) and values can be of any data type, including other objects. Objects are fundamental building blocks in JavaScript, used to represent data structures and encapsulate related data and functionality

// Creating objects

const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

console.log(person["age"]);
console.log(person.name);

// New object 

const secondPerson = new Object();
    person.name = "John Doe";
    person.age = 30;
    person.city = "New York";

// 

const car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

console.log(car.type)
console.log(car.model)
console.log(car.color)
