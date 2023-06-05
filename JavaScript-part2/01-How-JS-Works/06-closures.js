// closures

// closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.
// a closure gives you access to an outer function's scope from an inner function.

// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("harshit", "sharma");
console.log(ans);
ans();
