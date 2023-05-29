// solution using object.create

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj4 = {
    key4: "value4",
}

console.log(obj1.key2);  // value2
console.log(obj4.key4);  // value4
console.log(obj4.key2);  // undefined
// want obj4.key2 to print value2 instead of undefined

// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]


// prototype  

const obj2 = Object.create(obj1);  // {}  // one more way to create empty object

obj2.key3 = "value3";

console.log(obj2);
console.log(obj2.key1);  // value1

// this is happening
console.log(obj2.__proto__);
// output
// {key1: 'value1', key2: 'value2'}
// key1
// : 
// "value1"
// key2
// : 
// "value2"
// [[Prototype]]
// : 
// Object


