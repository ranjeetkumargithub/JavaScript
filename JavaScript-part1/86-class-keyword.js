// class

// class is basically a blueprint or template for creating objects.
// class method is created using class keyword.
// always add a constructor() method in the class.
// constructor execute automatically when a new object is created.
// constructor is used to initialize object properties.
// then add any number of methods


class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "toon na na na la la";
    }
}


// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }

// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// };
// CreateUser.prototype.sing = function(){
//     return "toon na na na la la";
// }


// object / instance
const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.firstName);
console.log(user2.is18());

console.log(Object.getPrototypeOf(user1));
