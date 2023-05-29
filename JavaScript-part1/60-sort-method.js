// sort method 

// sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
// sort() method overwrites the original array.

// ASCII TABLE 
//char : ascii value

// '0' to '9'
// 48  to  57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' to 'Z'
// 65  to 90


// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' to 'z'
// 97  to 122

// '{' : 123
// '|' : 124
// '}' : 125


// sort 

// 5, 9, 1200, 400, 3000
// 5, 9, 400, 1200, 3000  (expected)

const numbers = [5, 9, 1200, 400, 3000];
// "5", "9", "1200", "400", "3000"
// [53, 57, 49, 52, 51]      --> converted to ascii

numbers.sort();
console.log(numbers);  // [1200, 3000, 400, 5, 9]


const userNames = ['ranjeet', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
userNames.sort();
console.log(userNames);  // ['ABC', 'Harshit', 'aabc', 'abcd', 'mohit', 'nitish', 'ranjeet']


const num = [4,8,3,5,12,9,2];
// num.sort((a,b) => {
//     return a-b;
// });
num.sort((a,b) => a-b);
console.log(num);


// price low to high & high to low
const products = [
    {productId: 1, produceName: "p1", price: 300 },
    {productId: 2, produceName: "p2", price: 3000 },
    {productId: 3, produceName: "p3", price: 200 },
    {productId: 4, produceName: "p4", price: 8000 },
    {productId: 5, produceName: "p5", price: 500 },
]
console.log(products);

// low to high
//  slice(0) --> it will copy the whole products into lowToHigh
const lowToHigh = products.slice(0).sort((a,b) => {          
    return a.price - b.price;
});
console.log(lowToHigh);

// low to high
//  slice(0) --> it will copy the whole products into lowToHigh
const highToLow = products.slice(0).sort((a,b) => {          
    return b.price - a.price;
});
console.log(highToLow);