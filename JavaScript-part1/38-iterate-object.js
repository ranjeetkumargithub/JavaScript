// how to iterate object
const person = {
    name: "Ranjeet", 
    age: 23, 
    color: "white",
    hobbies: ["badminton", "cricket", "music"]
}

// for in loop

for(let key in person){
    // console.log(person[key]);
    console.log(`${key} : ${person[key]}`);
}

// object.keys
console.log(Object.keys(person));