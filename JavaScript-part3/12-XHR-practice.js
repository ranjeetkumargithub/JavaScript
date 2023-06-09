// XHR practice and error handling

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(data);
        const id = data[3].id;
        console.log(id);
    }else{
        console.log("something went wrong");
    }
}

xhr.onerror = () => {
    console.log("network error");
}

xhr.send();
