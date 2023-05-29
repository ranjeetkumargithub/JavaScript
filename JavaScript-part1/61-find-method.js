// find method

// find() method is used to return the value of the first element in the array that satisfies the provided condition.

const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength(str){
//     return str.length === 3;
// }
// const ans = myArray.find(isLength);
// console.log(ans);

const ans = myArray.find((string) => {
    return string.length === 3;
});
console.log(ans);


const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

// const myUser = users.find((user) => {
//     return user.userId===3;
// });
const myUser = users.find((user) => user.userId===3);
console.log(myUser);