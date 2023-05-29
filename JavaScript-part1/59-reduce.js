// reduce method

// reduce() method execute a reducer function over all elements in the array. It returns a single value.


const numbers = [1,2,3,4,5,10];

// aim: sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);

// accumulator,  currentValue,  return
//  1               2             3
//  3               3             6
//  6               4             10
//  10              5             15
//  15              10            25


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 120000},
    {productId: 3, productName: "tv", price: 20000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount);

// totalPrice       currentPrice         return
//   0                 12000             12000
//   12000             120000            132000
//   132000            20000             152000