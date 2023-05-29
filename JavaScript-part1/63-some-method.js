// some method

// some() method checks atleast one elements in the array satisfies the condition.


const numbers = [3,5,11,9];

const ans = numbers.some((Number) => Number%2===0);
console.log(ans);


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 4, productName: "macbook", price: 250000},
]
const result = userCart.some((cartItem) => cartItem.price > 200000);
console.log(result);
