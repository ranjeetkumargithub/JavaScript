// default parameter

// function addTwo(a,b){
//     return a+b;
// }
// const ans = addTwo(3,4);
// console.log(ans);


// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b = 0;
//     }
//     return a+b;
// }


function addTwo(a,b=0){
    return a+b;
}
const ans = addTwo(4,8);  // 12
const ans1 = addTwo(4);  // 4
console.log(ans);
console.log(ans1);

