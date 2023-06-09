//  callbacks, callback hell, the pyramid of doom
// asynchronous programming

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
const heading0 = document.querySelector(".heading");

// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "purple";
//     }, 1000);
// }, 1000);


// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

// callback hell

// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet"; 
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "purple"; 
//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.color = "red"; 
//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink"; 
//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "green"; 
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    }, time);
}

// pyramid of doom

changeText(heading1, "one", "violet", 3000, () => {
    changeText(heading2, "two", "green", 2000, () => {
        changeText(heading3, "three", "purple", 1000, () => {
            changeText(heading4, "four", "red", 2000, () => {
                changeText(heading5, "five", "cyan", 1000, () => {
                    changeText(heading6, "six", "blue", 2000, () => {
                        changeText(heading7, "seven", "violet", 2000, () => {
                            changeText(heading8, "eight", "blue", 2000, () => {
                                changeText(heading9, "nine", "orange", 1000, () => {
                                    changeText(heading10, "ten", "yellow", 2000, () => {
    
                                    }, () => {console.log("Heading10 does not exist")});
                                }, () => {console.log("Heading9 does not exist")});
                            }, () => {console.log("Heading8 does not exist")});
                        }, () => {console.log("Heading7 does not exist")});
                    }, () => {console.log("Heading6 does not exist")});
                }, () => {console.log("Heading5 does not exist")});
            }, () => {console.log("Heading4 does not exist")});
        }, () => {console.log("Heading3 does not exist")});
    }, () => {console.log("Heading2 does not exist")});
}, () => {console.log("Heading1 does not exist")});
