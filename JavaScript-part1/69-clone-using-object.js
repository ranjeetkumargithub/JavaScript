// clone using Object.assign

const obj = {
    key1: "value1",
    key2: "value2",
}

// const obj2 = obj;
// console.log(obj);  // {key1: 'value1', key2: 'value2'}
// console.log(obj2);  // {key1: 'value1', key2: 'value2'}

// obj.key3 = "value3";
// console.log(obj);  // {key1: 'value1', key2: 'value2', key3: 'value3'}
// console.log(obj2);  // {key1: 'value1', key2: 'value2', key3: 'value3'}

// const obj2 = {...obj};  // using spread operator
// obj.key3 = "value3";
// console.log(obj);  // {key1: 'value1', key2: 'value2', key3: 'value3'}
// console.log(obj2);  // {key1: 'value1', key2: 'value2'}


const obj2 = Object.assign({}, obj);
obj.key3 = "value3";
console.log(obj);  // {key1: 'value1', key2: 'value2', key3: 'value3'}
console.log(obj2);  // {key1: 'value1', key2: 'value2'}