// intro to events

// Events in javascript provide a dynamic interface to a webpage. These events are connected to elements in the document object model (DOM).bg-dark

// click event
// three way to add events to the html

const btn = document.querySelector(".btn-headline");

// method --> addEventListener

// function clickMe(){
//     console.log("You clicked me!!!");
// }

btn.addEventListener("click", () => {
    console.log("You clicked me!!!");
});
