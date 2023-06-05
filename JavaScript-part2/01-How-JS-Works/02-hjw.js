// What happens to function declarations ? 

// hoisting : in javascript, hoisting allows you to use functions and variables before they are declared.
// Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.

console.log(this);  // {window}
console.log(window);  // {window}
console.log(myFuncrion);  // myFunction(){console.log("this is my function")};
console.log(firstName);  // undefined
console.log(lastName);  // undefined
console.log(FullName);  // undefined

function myFuncrion(){
    console.log("this is my function");
}

var firstName = "Rahul";
var lastName = "Sharma";
var FullName = firstName + " " + lastName;
console.log(firstName);  // Rahul
console.log(lastName);  // Sharma
console.log(FullName);  // Rahul Sharma
