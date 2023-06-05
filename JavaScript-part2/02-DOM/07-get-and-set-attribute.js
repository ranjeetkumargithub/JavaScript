// get and set attribute

// setAttribute() method used to sets a new value to an attribute. if the attribute doesnot exist, it is created first.

// getAttribute() method used to return the value of specified attribute of the element.

const link = document.querySelector("a")  // it will select 1st anchor element
console.log(link.getAttribute("href"));  // #home
console.log(link.getAttribute("href").slice(1));  // home

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));  // text

link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));  // https://codprog.com

