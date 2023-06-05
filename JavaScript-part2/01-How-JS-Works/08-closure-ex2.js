// closure example 2

// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// const cube = myFunction(3);
// const ans = cube(2);
// console.log(ans);  // 2 ** 3 = 8

// const square = myFunction(2);
// const ans2 = square(3);
// console.log(ans2);  // 3 ** 2 = 9


const myFunction = (power) => {
    return (number) => {
        return number ** power;
    }
}

const cube = myFunction(3);
const ans = cube(2);
console.log(ans);  // 2 ** 3 = 8

const square = myFunction(2);
const ans2 = square(3);
console.log(ans2);  // 3 ** 2 = 9
