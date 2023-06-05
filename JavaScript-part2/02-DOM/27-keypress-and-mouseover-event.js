// keypress event
// mouseover event
// mouseleave event

const body = document.body;

const mainButton = document.querySelector(".btn-headline");

body.addEventListener("keypress", (e) => {
    console.log(e.key);
});

mainButton.addEventListener("mouseover", () => {
    console.log("mouseover event occured !!!");
});

mainButton.addEventListener("mouseleave", () => {
    console.log("mouseleave event occured !!!");
});
