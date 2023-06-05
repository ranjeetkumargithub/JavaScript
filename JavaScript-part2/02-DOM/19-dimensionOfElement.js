// How to get the dimensions of an element

// height width

const sectionTodo = document.querySelector(".todo-section");
const info = sectionTodo.getBoundingClientRect();
console.log(info);
