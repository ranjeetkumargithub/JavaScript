// classList, add and remove, toggle classes

// classList property returns the CSS classnames of an element as a DOMTokenList.
// This object has some well-known methods including contains(), add(), remove(), and toggle().

// contains(): This method returns a boolean value indicating if a particular class name is present or not.

// add(): This method is used to add one or more class names to an element.

// remove(): This method is used to remove one or more class names from an element.

// toggle(): The toggle() method of the DOMTokenList interface removes an existing token from the list. If the token doesn't exist it's added to the list.


// const sectionTodo = document.querySelector(".todo-section");
// console.log(sectionTodo);
// console.log(sectionTodo.classList);  // DOMTokenList(2) ['todo-section', 'container', value: 'todo-section container']

// add class
// sectionTodo.classList.add('bg-dark');

// remove class
// sectionTodo.classList.remove("container");

// check specified class exist or not
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);  // true

// toggle class
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");

