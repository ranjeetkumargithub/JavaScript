// block scope vs function scope 


// let and const are block scope
// var is function scope 

{
    let firstName = "Ranjeet";
    console.log(firstName);
}

{
    let firstName = "Mohit";
}
// console.log(firstName); // error

let firstName = "Rana";
console.log(firstName);


{
    var name = "manoj";
}
console.log(name);


function myApp(){
    if(true){
        let name1 = "mohan";
        console.log(name1);
    }
    // console.log(name1);  // error
}
myApp();

