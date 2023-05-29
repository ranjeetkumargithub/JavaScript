// filter method

// filter() method is used to create new array from given array that pass the test condition.

const numbers = [1,3,2,6,4,8];

// const isEven = function(number){
//     return number%2===0;
// }

// const evenNumber = numbers.filter(isEven);
// console.log(evenNumber);

const evenNumber = numbers.filter((number) => {
    return number%2===0;
});
console.log(evenNumber);


const words = ["spray", "limit", "elite", "execution", "destruction", "present"];

const result = words.filter((word) => {
    return word.length > 6;
});

console.log(result);
