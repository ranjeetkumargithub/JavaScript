// difference b/w dot and bracket notation

const key = "email";
const person = {
    name: "Ranjeet", 
    age: 23, 
    color: "white",
    "person hobbies": ["badminton", "cricket", "music"]
};
console.log(person["person hobbies"]);
person[key] = "ranjeet@gmail.com";
console.log(person);