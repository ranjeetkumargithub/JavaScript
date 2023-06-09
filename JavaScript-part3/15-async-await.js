// async await

// async function is a function that is declared with async keyword.
// await keyword is used inside async function and it is used to wait for the promise.

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL).then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);
// })

// async function getPosts(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data = await response.json();
//     // console.log(data);
//     return data;
// }

const getPosts = async() => {
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    // console.log(data);
    return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts().then((myData) => {
    console.log(myData);
}).catch((error) => {
    console.log(error);
})

