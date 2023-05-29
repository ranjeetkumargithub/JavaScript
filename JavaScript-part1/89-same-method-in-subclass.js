// same method in subclass

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

    eat(){
        return `Modifird Eat : ${this.name} is eating`;
    }
}

// object / instance
const tommy = new Dog("Tommy", 5, 45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());  // Modifird Eat : Tommy is eating

const animal1 = new Animal('sheru', 2);
console.log(animal1.eat());  // sheru is eating
