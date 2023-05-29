// map method

// the map() method create a new array with the result of calling a provided function on each element present in the calling array. 

const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number * number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);


const squareNumber = numbers.map((Number) => {
    return Number * Number;
});
console.log(squareNumber);


const users = [
    {firstName: "Raju", age: 24},
    {firstName: "Rohit", age: 34},
    {firstName: "Ramesh", age: 25},
    {firstName: "Rajesh", age: 26}
]

const userNames = users.map((user) => {
    return user.firstName;
})

console.log(userNames);
