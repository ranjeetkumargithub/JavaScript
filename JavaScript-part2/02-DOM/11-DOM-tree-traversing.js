// Traversing DOM Tree

// DOM Traversal is the act of selecting nodes in the DOM tree from other nodes.

// const rootNode = document.getRootNode();
// console.log(rootNode);  // #document object
// console.log(rootNode.childNodes);  // NodeList [html]
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);  // head
// console.log(textNode1);
// console.log(bodyElementNode);

// console.log(headElementNode.parentNode);  // html

// // siblings relationship
// console.log(headElementNode);  // head
// console.log(headElementNode.nextSibling);  // #text
// console.log(headElementNode.nextSibling.nextSibling);  // body
// console.log(headElementNode.nextElementSibling);  // body

// console.log(headElementNode.childNodes);  // NodeList(5) [text, title, text, script, text]


// const h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.parentNode);
// const div = h1.parentNode;
// div.style.color = "#efefef";
// div.style.backgroundColor = "#333";
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";


// const body = document.body;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";


// const head = document.querySelector("head");
// console.log(head);
// const title = head.querySelector("title");
// console.log(title);
// console.log(title.childNodes);


const container = document.querySelector(".container");
console.log(container);
console.log(container.childNodes);  // NodeList(5) [text, h1, text, p, text]
console.log(container.children);   // HTMLCollection(2) [h1, p]

