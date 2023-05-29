// lexical scope 

// lexical scope is the ability for a function scope to access variables from the parent scope

const myVar = "value1";

function myApp(){
    // const myVar = "value2";
    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () => {
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }
    
    console.log(myVar);
    myFunc();
}
myApp();
