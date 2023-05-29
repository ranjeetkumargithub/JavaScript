// new keyword example

// this refers to empty object : this --> {}

// new keyword
// 1. create empty object {}
// 2. return this (empty {})
// 3. automatically create relationship b/w __proto_ /[[prototype]] & prototype
// i.e Object.create(createUser.prototype)

// constructor function
function CreateUser(firstName, lastName, email, age, address){
    // const user = Object.create(createUser.prototype);  // {}  // new keyword do this automaticaly
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.sing = function(){
    return "toon na na na la la";
}

console.log(CreateUser.prototype);

const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
console.log(user2.sing());
console.log(user2.is18());
