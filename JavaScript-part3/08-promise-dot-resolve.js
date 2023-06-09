// Promise.resolve
// Promise chaining

// then():
// then() method always returns the promise

// const myPromise = Promise.resolve(5);
// myPromise.then((value) => {
//     console.log(value);  // 5
// })


// then():
// then() method always returns the promise

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

myPromise().then((value) => {
    console.log(value);  // foo
    value += "bar";
    return value;  // foobar
    // return Promise.resolve(value);  // foobar
}).then((value) => {
    console.log(value);  // foobar
})
