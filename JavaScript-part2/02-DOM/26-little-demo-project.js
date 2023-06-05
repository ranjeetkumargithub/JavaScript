// little demo project

const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");

function ramdomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

mainButton.addEventListener("click",() => {
    const randomColor = ramdomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})

