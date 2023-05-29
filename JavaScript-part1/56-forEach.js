// important array methods
// forEach method:  is a iterative method. It call a provided callbackFn function once for each element in an array.

const numbers = [4,2,5,8];

// function myFunc(num, index){
//     console.log(`index is ${index} number is ${num}`);
// }

// for(let i = 0; i < numbers.length; i++){
//     myFunc(numbers[i], i);
// }

numbers.forEach(function(number, index){
    console.log(`index is ${index} number is ${number}`);
});

numbers.forEach(function(number){
    console.log(number*2);
});


const users = [
    {firstName: "Raju", age: 24},
    {firstName: "Rohit", age: 34},
    {firstName: "Ramesh", age: 25},
    {firstName: "Rajesh", age: 26}
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

users.forEach((user) => {
    console.log(user.firstName);
});

// for(let user of users){
//     console.log(user.firstName);
// }

