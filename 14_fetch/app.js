const myUrl = "https://jsonplaceholder.typicode.com/posts/";

const findPostById = async (id) => {
    try {
        const res = await fetch(myUrl + id);
        const post = res.json();

        console.log(post);
    } catch (error) {
        console.log(error);
    }
};

findPostById(80);
