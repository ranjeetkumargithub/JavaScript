// setInterval

// setInterval() method is used to repeat a specified function at every given time interval until clearInterval() is called.

// clearInterval() method is used to clear/stop the set interval which has been set by setInterval().

// console.log("script start");
// setInterval(() => {
//     console.log(Math.random());
// }, 1000);
// console.log("script end");

// output:
// script start
// script end
// random no. b/w 0-1 every second


const body = document.body;
const button = document.querySelector("button");

const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
    clearInterval(intervalId);
    button.textContent = body.style.background;
})

console.log(intervalId);
