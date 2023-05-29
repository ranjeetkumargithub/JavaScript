// objects
// arrays are good but not sufficient for real world data
// objects store key value pairs 
// objects don't have index

// how to create objects 

const person = {
    name: "Ranjeet", 
    age: 23, 
    color: "white",
    hobbies: ["badminton", "cricket", "music"]
};
console.log(person);

// how to access data from objects with dot notation
console.log(person.name);
console.log(person.age);
console.log(person.color);
console.log(person.hobbies);

// how to add key value par to objects with dot notation
person.gender = "male";
console.log(person);

console.log("========================");

// how to access data from objects with bracket notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["color"]);
console.log(person["hobbies"]);

// how to add key value par to objects with bracket notation
person["phone"] = 9060586833;
console.log(person);