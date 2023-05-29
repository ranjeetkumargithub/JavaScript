// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "   Ranjeet    ";

console.log(firstName.length);
let newName = firstName.trim(); // "Ranjeet"
console.log(newName);
console.log(newName.length);
newName = newName.toUpperCase();
console.log(newName);
newName = newName.toLowerCase();
console.log(newName);

// start index 
// end index

newString = newName.slice(0,4); // ranj
console.log(newString);