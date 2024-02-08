<<<<<<< HEAD
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
=======
const apiKey = "c43cec527a0380fcb7606144cacdbd0f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await res.json();
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
>>>>>>> fe042b7 (Adding new project)
