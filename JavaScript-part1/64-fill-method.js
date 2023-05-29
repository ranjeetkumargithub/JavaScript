// fill method

// fill() method fills specified elements in an array with a value.
// fill() method overwrites the original array.

// value, startIndex, endIndex

const newArray = new Array(10).fill(0);
console.log(newArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);
console.log(myArray);