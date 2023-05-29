// Sets (it is iterable)

// set ia collection of unique values of any datatype. each value can only occur once in a set.

// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set([1,2,3,]);
console.log(numbers);

const items = ['item1', 'item2', 'item3'];

const nums = new Set();
nums.add(1);
nums.add(2);
nums.add(3);
nums.add(4);
nums.add(5);
nums.add(items);
nums.add(["items1", "item2"]);
console.log(nums);
if(nums.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}

for(let num of nums){
    console.log(num);
}

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);