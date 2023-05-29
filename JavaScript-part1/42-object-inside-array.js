// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1, firstName: "Ranjeet", gender: "male"},
    {userId: 2, firstName: "Rani", gender: "female"},
    {userId: 3, firstName: "Mohit", gender: "male"}
]

console.log(users);

for(let user of users){
    console.log(user);
    // console.log(user.firstName);
}
