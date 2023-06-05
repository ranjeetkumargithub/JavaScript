// Function execution context

// whenever a function is called, the JavaScript engine creates a different type of Execution Context known as Function Execution Context(FEC) within the Globle Execution Context(GEC) to evaluate and execute the code within that function.

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("mohit", "sharma");
console.log(personName);

