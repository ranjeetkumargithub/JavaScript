// sort syntax

const user = {
    firstName: "Raju",
    age: 22,
    about(){
        console.log(`name is ${this.firstName} and age is ${this.age}`);
    }
}
user.about();  // name is Raju and age is 22