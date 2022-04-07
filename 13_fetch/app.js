const myUrl = "https://jsonplaceholder.typicode.com/comments/1";

fetch(myUrl)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
    .finally(() => console.log("finalizo"));
