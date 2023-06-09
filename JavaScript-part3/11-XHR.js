// XHR (XML HTTP Request)

// XMLHttpRequest is an API in the form of object. it is used to transfer data between client and server.


const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
// console.log(xhr);

// step1
// console.log(xhr.readyState);
xhr.open("GET", URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr);
//         // console.log(xhr.readyState);
//         // console.log(xhr.response);
//         // console.log(typeof xhr.response);
//         if(xhr.readyState === 4){
//             const response = xhr.response;
//             const data = JSON.parse(response);
//             console.log(data);
//             console.log(typeof data);
//         }
//     }
// }

xhr.onload = function(){
    // console.log(xhr.readyState);  // 4
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();
