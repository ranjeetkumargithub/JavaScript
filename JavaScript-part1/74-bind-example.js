// bind example

const user = {
    firstName: "Raju",
    age: 22,
    about: function(){
        console.log(`name is ${this.firstName} and age is ${this.age}`);
    }
}

// user.about(); // name is Raju and age is 22

// don't do this mistake
// const myFunc = user.about;  // name is undefined and age is undefined
// myFunc();

const myFunc = user.about.bind(user); // name is Raju and age is 22
myFunc();