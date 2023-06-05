// lexical environment, scope chain

// lexical environment is a specification type used to define the association of identifiers to specific variables and functions.

// scope chain: javascript engine uses scopes to find out the exact location or accessibility of variables and that perticular process is known as scope chain.

const lastName = "sharma";

const printName = function(){
    const firstName = "mohit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName()
