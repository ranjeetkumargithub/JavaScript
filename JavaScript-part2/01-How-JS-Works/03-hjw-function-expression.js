// What happens to function expressions ? 

console.log(myFuncrion1);  // undefined. because myFunction1 is created with var keyword.

// function expression with var
var myFuncrion1 = function(){
    console.log("this is my function1");
}

console.log(myFuncrion1);  // myFunction1(){console.log("this is my function1")}


// Are let and const are hoisted ? 
// let and const are hoisted. it will store the variables and functions in globle memory and its value is uninitialised.
// it cannot be accessible before initialization.
console.log(firstName);  // Uncaught ReferenceError: Cannot access 'firstName' before initialization
let firstName = "mohit";
console.log(firstName);
console.log(myFuncrion2);  // Uncaught ReferenceError: Cannot access 'myFuncrion2' before initialization

// function expression with let
let myFuncrion2 = function(){
    console.log("this is my function2");
}

console.log(myFuncrion2);  // myFunction2(){console.log("this is my function2")}
