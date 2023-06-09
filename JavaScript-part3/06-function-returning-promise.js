// function returning promise

function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve,reject) => {
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried Rice");
        }else{
            reject("couldn't do it");
        }
    })
}

ricePromise().then((success) => {
    console.log("let's eat ", success);
}).catch((error) => {
    console.log(error);
})