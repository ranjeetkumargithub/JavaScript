// Callback hell to flat code 
// refactor with promise

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject("element not found");
            }
        }, time);
    })
}

// const returnedPromise = changeText(heading1, "one", "red", 1000);

// returnedPromise.then(() => {
//     return changeText(heading2, "two", "purple", 1000);
// });

changeText(heading1, "one", "red", 1000).then(() => {
    return changeText(heading2, "two", "blue", 1000)
}).then(() => {
    return changeText(heading3, "three", "orange", 1000)
}).then(() => {
    return changeText(heading4, "four", "purple", 1000)
}).then(() => {
    return changeText(heading5, "five", "blue", 1000)
}).then(() => {
    return changeText(heading6, "six", "red", 1000)
}).then(() => {
    return changeText(heading7, "seven", "purple", 1000)
}).then(() => {
    return changeText(heading8, "eight", "yellow", 1000)
}).then(() => {
    return changeText(heading9, "nine", "yellow", 1000)
}).then(() => {
    return changeText(heading10, "ten", "yellow", 1000)
}).catch((error) => {
    alert(error);
})
