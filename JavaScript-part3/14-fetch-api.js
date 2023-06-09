// Fetch API

// fetch() method is used to request data from server. and fetch() method returns a promise.
// the request can be of any type of API that returns data in JSON format

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then((response) => {
    console.log(response);
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Something went wrong!!!");
    }
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("inside catch");
    console.log(error);
})
