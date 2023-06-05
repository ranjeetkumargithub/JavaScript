// Click event on multiple buttons

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", () => {
//     console.log("you clicked me !!!");
// });

const allButtons = document.querySelectorAll("button");
// console.log(allButtons);

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         // console.log("you clicked me !!!");
//         console.log(this);
//         console.log(this.textContent);
//     })
// }

// for(let i = 0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    })
})
