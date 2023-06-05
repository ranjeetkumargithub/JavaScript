// iterate elements

// get multiple elements using getElementsByClassName
// get multiple elements using querySelectorAll

// array like object ---> indexing, length property 

// let navItems = document.getElementsByTagName("a");  // HTMLCollection
// console.log(navItems);

// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop

// for(let i = 0; i < navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// change HTMLCollection to Array
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));  // true
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// const navItems = document.querySelectorAll(".nav-item");  // NodeList
// console.log(navItems);
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);

let navItems = document.querySelectorAll("a");   // NodeList
console.log(navItems);
// simple for loop
// for of loop
// forEach

// for(let i = 0; i < navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})

// change NodeList to Array
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));  // true
