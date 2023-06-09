// callback:

//  callback function is a function passed into another function as an argument.
// calback function will execute after the completion of outer function

// function myFunc(callback){
//     console.log("func is doing task 1");
//     callback();
// }

// function myFunc2(){
//     console.log("func is doing task 2");
// }

// myFunc(myFunc2);


// function myFunc3(callback){
//     console.log("func is doing task 3");
//     callback();
// }

// myFunc(function(){
//     console.log("func is doing task 3");
// })

// myFunc3(() => {
//     console.log("func is doing task 3");
// })


function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1, number2);
    }else{
        onFailure();
    }
}

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

getTwoNumbersAndAdd("4", 5, (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("Wrong Data Type");
    console.log("please pass numbers only");
});
