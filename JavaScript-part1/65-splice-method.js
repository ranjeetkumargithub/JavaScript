// splice method

// splice() method used to modify the original array by removing or adding its item.

// startIndex , deleteCount , insert

const myArray = ['item1','item2','item3'];

// delete
const deletedItem = myArray.splice(1, 1);
console.log(myArray);
console.log("deleted item", deletedItem);

// insert
myArray.splice(1, 0, "item5");
console.log(myArray);

// insert & delete together
const deletedEle = myArray.splice(1, 2, 'item10', 'item11');
console.log(myArray);
console.log("deleted element", deletedEle);
