// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push --> add element to the last
fruits.push("banana");
console.log(fruits);

// pop --> delete last element of an array
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruit is", poppedFruit);

// unshift --> add elements in the beginning of the given
fruits.unshift("banana");
console.log(fruits);

// shift --> remove the first element from an array
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruit is", removedFruit);

