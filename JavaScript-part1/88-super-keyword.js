// super keyword

// super keyword is used to call the constructor of its parent class to access the parent's properties and methods

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`;
    }
}

// object / instance
const tommy = new Dog("Tommy", 5, 45);
console.log(tommy);
console.log(tommy.run());
