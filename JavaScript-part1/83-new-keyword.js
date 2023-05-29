// new keyword

// __proto__ is a reference and prototype is an object

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
};

const user1 = new createUser("raja", 9);

console.log(user1);
user1.about();

// this refers to empty object : this --> {}

// new keyword
// 1. create empty object {}
// 2. return this (empty {})
// 3. automatically create relationship b/w __proto__ & prototype
// i.e Object.create(createUser.prototype)

