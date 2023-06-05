// Event bubbling / event propogation 
// Event Capturing

// Event Capturing is opposite to event bubbling, where in event capturing, an event moves from the outermost element to the target. 
// Otherwise, in case of event bubbling, the event movement begins from the target to the outermost element in the file.

console.log("hello")

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Event Capturing
child.addEventListener("click", () => {
    console.log("capture !!! child");
}, true);

parent.addEventListener("click", () => {
    console.log("capture !!! parent");
}, true);

grandparent.addEventListener("click", () => {
    console.log("capture !!! grandparent");
}, true);

document.body.addEventListener("click", () => {
    console.log("capture !!! document.body");
}, true);


// Event bubbling / event propogation 

child.addEventListener("click", () => {
    console.log("bubble child");
});

parent.addEventListener("click", () => {
    console.log("bubble parent");
});

grandparent.addEventListener("click", () => {
    console.log("bubble grandparent");
});

document.body.addEventListener("click", () => {
    console.log("bubble document.body");
});


