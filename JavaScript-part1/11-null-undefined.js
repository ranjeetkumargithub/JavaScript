// undefined 

let firstName;
console.log(typeof firstName);
firstName = "Ranjeet";
console.log(typeof firstName, firstName);

// null
let myVar = null;
console.log(myVar, typeof myVar);

myVar = "ranjeet";
console.log(myVar, typeof myVar);

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);

