// typeof operator 

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22; 
let firstName = "harshit";

console.log(typeof age);
console.log(typeof firstName);

// // 22 -> "22"
// // convert number to string. 
age = age + "";
console.log(typeof(age));  // string
console.log(age);  // "22"


// // convert string to number. 

let myStr = +"34";
console.log(typeof myStr);  // number

let abc = "18";
abc = Number(abc);
console.log(typeof abc);  //number