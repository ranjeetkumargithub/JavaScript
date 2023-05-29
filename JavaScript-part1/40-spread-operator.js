// spread operator

// spread operator in array
const arr1 = [1,2,3];
const arr2 = [6,5,7];

const newArr = [...arr1, ...arr2, 23, 45];
console.log(newArr);

const newArray = [..."abcd"];  // ["a","b","c","d"]
console.log(newArray);


// spread operator in objects
const obj1 = {
    key1 : "value1",
    key2 : "value2",
};
console.log(obj1);

const obj2 = {
    key3 : "value3",
    key4 : "value4",
};
console.log(obj2);

const newObject = {...obj1, ...obj2, key5: "value5"}
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject);

