// getter and setters

// the getters and setters are the methods that are used to get or set the value for properties of an object.
// the getter methods are used to access the properties od an object.
// the setter methods are used to set/change the values of an object.

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Ranjeet", "Kumar", 22);
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
// console.log(person1.fullName());
console.log(person1.fullName);

person1.fullName = "mohit sharma";
console.log(person1);

