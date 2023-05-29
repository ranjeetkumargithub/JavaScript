// arrow function and this

// this keyword doesnot work in arrow function
const user = {
    firstName: "manoj",
    age: 25,
    about: () => {
        console.log(this.firstName, this.age);  // undefined, undefined
    }
}
user.about();