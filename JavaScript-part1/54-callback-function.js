// callback functions

// callback function is a function passed into another function as an argument. and it will execute after the completion of main function.

function myFunc2(name){
    console.log("inside myFunc2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func");
    callback("ranjeet");
}

myFunc(myFunc2);
