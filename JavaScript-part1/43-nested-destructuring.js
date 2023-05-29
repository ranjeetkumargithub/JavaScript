// nested destructuring

const users = [
    {userId: 1, firstName: "Ranjeet", gender: "male"},
    {userId: 2, firstName: "Rani", gender: "female"},
    {userId: 3, firstName: "Mohit", gender: "male"}
]

// const [user1, user2, user3] = users;
// console.log(user1);

const [{firstName}, , {gender}] = users;
console.log(firstName);
console.log(gender);
