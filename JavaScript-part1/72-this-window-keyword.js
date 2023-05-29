// this & window keyword

// if we console this & window keyword the it will returns window object

// console.log(this);  // window object
// console.log(window);  // window object

"use strict"; // if we use "use strict"; before console, then this keyword returns undefined
function myFunc(){
    console.log(this);
}
myFunc();  // window object
// window.myFunc();  // window object