// every method

// every() method checks whether all the given elements in an array are satisfying the provided condition in the function.
// every() method returns true if the function returns true for all elements.

// check every elements in the array is  even
const numbers = [2,4,6,8,10];

const ans = numbers.every((number) => number%2===0);
console.log(ans);

// check every product < 30000
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]

const result = userCart.every((cartItem) => cartItem.price < 30000);
console.log(result);

