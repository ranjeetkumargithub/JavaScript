// methods

// methods are actions that can be performed on objects
// function inside object

const person = {
    firstName: "harsh",
    age: 18,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}
console.log(person.about);  // ƒ (){ console.log("person name is harsh and age is 18");}
person.about();  // person name is harsh and age is 18

console.log("===========================================");

function personInfo(){
    console.log(`The name of person is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Rajesh",
    age: 25,
    about: personInfo
}
const person2 = {
    firstName: "Sujeet",
    age: 23,
    about: personInfo
}
const person3 = {
    firstName: "Mohit",
    age: 27,
    about: personInfo
}
person1.about();
person2.about();
person3.about();

