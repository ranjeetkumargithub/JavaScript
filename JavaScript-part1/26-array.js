// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items/elements

let numbers = [2,5,3,6,1];
console.log(numbers);
console.log(numbers[3]);

let mixed = [2,3,1,4, "banana", null, undefined];
console.log(mixed);


let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

fruits[1] = "banana";
console.log(fruits);
console.log(typeof fruits);  // object
console.log(Array.isArray(fruits));  // check if the fruit is array or not
