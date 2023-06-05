// Event Delegation

// Event Delegation is basically a pattern to handle events efficiently. 
// Instead of adding an event listener to each and every similar element, 
// we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

const grandparent = document.querySelector(".grandparent");

grandparent.addEventListener("click", (e) => {
    console.log(e.target);
});
