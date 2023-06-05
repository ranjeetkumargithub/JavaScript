// compilation 

// why compilation 
// compliation phase:
//  1. Early Error Checking
//  2. Determining Appropriate Scope for variables (D.P.S.V)

// code execution

// How javascript code executes 
// In JavaScript code executes inside execution context.
// first it will create globle execution context
//  1. creation phase
//      window : {}
//      firstName: undefined
//      this : window
//  2. code execution phase
//      code will execute line by line



// what is global exection context ? 
// what is local execution context ? 
// closures

console.log(this);  // {window}
console.log(window);  // {window}
console.log(firstName);  // undefined
var firstName = "harsh";  
console.log(firstName);  // harsh
