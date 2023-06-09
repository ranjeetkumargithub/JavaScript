// synchronous programming
// JavaScript is a synchronous programming single threaded language

// console.log("script started");  // 1st

// for(let i = 0; i < 10000; i++){
//     console.log("inside for loop");  // 2nd
// }

// console.log("script end");  // 3rd

// synchronous programming vs asynchronous programming

// synchronous programming:
// every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.

// asynchronous programming:
// Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one.




// setTimeout
// setTimeout() method is an asynchronous function and it takes function as 1st parameter and specified time as 2nd parameter.
// setTimeout() method is used to execute a function after waiting for the specified time interval.

// console.log("script start");
// function hello(){
//     console.log("hello world");
// }
// setTimeout(hello, 1000);
// console.log("script end");

// output:
// script start
// script end
// hello world

// console.log("script start");
// setTimeout(() => {
//     console.log("inside setTimeout")
// }, 1000);
// console.log("script end");

// output:
// script start
// script end
// inside setTimeout

// console.log("script start");  // 1
// setTimeout(() => {
//     console.log("inside setTimeout");  // 4
// }, 0);
// for(let i = 0; i <= 100; i++){
//     console.log("....");  // 2
// }
// console.log("script end");  // 3

// output:
// script start
// .... x 100
// script end
// inside setTimeout 


console.log("script start");
const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 0);
for(let i = 0; i <= 100; i++){
    console.log("....");
}
console.log("setTimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);  // it means inside setTimeout will not execute
console.log("script end");

// output:
// script start
// .... x 100
// setTimeout id is  1
// clearing time out
// script end


