const button = document.getElementById("btn1");
const meme = document.querySelector("img");
const Title = document.getElementById("t1");
const author = document.querySelector("author");



const update = (url, title, author) => {
    meme.setAttribute("src", url);
    Title.textContent = title;
    author.textContent = `Meme by : ${author}`;
}
const generatememe = () => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json())
        .then((data) => {
            update(data.url, data.title, data.author)
        });
};

button.addEventListener("click", generatememe);