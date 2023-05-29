// arrow functions


// const singHappyBirthday = function(){
//     console.log("Happy birthday to you .................");
// }
// singHappyBirthday();

const singHappyBirthday = () => {
    console.log("Happy birthday to you .................");
}
singHappyBirthday();


const twoPlusFour = () => {
    console.log(2+4);
}
twoPlusFour();


const returnA = () => {
    return 4+5;
}
const returnedVaue = returnA();
console.log(returnedVaue);



// function with parameter
const sumTwoValue = (num1, num2) => {
    return num1+num2;
}
const returnedsum = sumTwoValue(5,8);
console.log(returnedsum);



// isEven
// output : true, false

const isEven = (number) => {
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(6));

// const isEven = number => number % 2 === 0;



// input : string
// output : firstCharacter
const firstChar = (anyString) => {
    return anyString[0];
}
console.log(firstChar("abcd"));



// input : array, target (number)
// output : index of target if target present in array
const findTarget = (array, target) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,2,8,98];
console.log(findTarget(myArray, 8));

