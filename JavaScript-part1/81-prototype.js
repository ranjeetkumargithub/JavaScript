// prototype

// prototype is an object

// prototype is an object that is associate with every functions and objects by default.
// where function's prototype property is accessible and modifiable and object's prototype property is not visible.
// every function includes prototype object by default.

function hello(){
    console.log("hello world");
}

const hlo = {name: "raj", age: 18};

// javascript function ===> function  + object

// console.log(hello.name);  // hello

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide the prototype property

if(hello.prototype){
    console.log("prototype is present in function");
}else{
    console.log("prototype is not present in function");
}    // output : prototype is present in function

if(hlo.prototype){
    console.log("prototype is present in object");
}else{
    console.log("prototype is not present in object");
}    // output : prototype is not present in object


hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());