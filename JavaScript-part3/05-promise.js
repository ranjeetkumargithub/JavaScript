// Promises

// Promise is a special JavaScript object. It is used to handle asynchronous operations.
// it produce a value after asynchronous operation completes successfully or an error if it does not complete successfully.

console.log("script start");


const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

const friedRicePromise = new Promise((resolve,reject) => {
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("couldn't do it");
    }
})

friedRicePromise.then((success) => {
    console.log("let's eat ", success);
}).catch((error) => {
    console.log(error);
})


setTimeout(() => {
    console.log("Hello from setTimeout");
}, 0)


for(let i = 1; i <= 10; i++){
    console.log("....");
}


console.log("script end");


// output:
// script start
// .... * 10
// script end
// let's eat  Fried Rice
// Hello from setTimeout
