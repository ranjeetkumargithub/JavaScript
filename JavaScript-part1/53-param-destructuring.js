// param destructuring

// object
// react

const person = {
    firstName: "Ranjeet",
    gender: "male",
    age: 23
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// printDetails(person);


function printDetails({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}

printDetails(person);