// This keyword inside eventListener callback

// The value of "this" within the handler

// value of this using normal:
// When attaching a handler function to an element using addEventListener() , the value of this inside the handler will be a reference to the element.
// It will be the same as the value of the currentTarget property of the event argument that is passed to the handler.

// value of this using arrow function will be window onject

const btn = document.querySelector(".btn-headline");
console.log(btn);

btn.addEventListener("click", () => {
    console.log("You clicked me!!!");
    console.log("value of this");
    console.log(this);
});
