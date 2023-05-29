// call, apply, bind method

// call method: call() method is used to call a function contains this value and an argument provided individually.

// apply method: apply() method is used to call a function contains this value and an argument contains elements of an array.

// bind method: bind() method is used to create new function. When a function is called, it has its own this keyword set to provided value, with a given sequence of arguments.

// const user1 = {
//     firstName: "rahul",
//     age: 34,
//     about: function(){
//         console.log(`name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// const user2 = {
//     firstName: "mohit",
//     age: 30
// }
// // access about method inside user2 object
// user1.about.call(user2);


// const user1 = {
//     firstName: "rahul",
//     age: 34,
//     about: function(hobby, favMusician){
//         console.log(`name is ${this.firstName} and age is ${this.age} and my hobby is ${hobby}, musician is ${favMusician}`);
//     }
// }
// const user2 = {
//     firstName: "mohit",
//     age: 30
// }
// // access about method inside user2 object
// user1.about.call(user2, "badminton", "arijit");


function about(hobby, favMusician){
    console.log(`name is ${this.firstName} and age is ${this.age} and my hobby is ${hobby}, musician is ${favMusician}`);
}

const user1 = {
    firstName: "rahul",
    age: 34
}
const user2 = {
    firstName: "mohit",
    age: 30
}
// access about method inside user2 object
about.call(user1, "badminton", "arijit");

// apply
about.apply(user1, ["cricket", "vishal"]);

// bind
const func = about.bind(user2, "guitar", "arman");
func();
