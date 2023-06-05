// closure example 3

function func(){
    let counter = 1;
    return function(){
        if(counter === 1){
            console.log("Hi you called me");
            counter++;
        }else{
            console.log("you already called me once");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();
