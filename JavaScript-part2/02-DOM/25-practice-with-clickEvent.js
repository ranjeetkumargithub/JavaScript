// little practice with click events

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons.length);

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})
