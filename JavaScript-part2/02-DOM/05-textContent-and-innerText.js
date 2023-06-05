// change text
// textContent and innerText

// both are almost simillar

// textContent: textContent is a property used to get or change the text content.

// innerText: innerText property used to sets or returns the text content of an element.

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);  // Manage your tasks
console.log(mainHeading.innerText);  // Manage your tasks
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);  // This is something else
