const apiKey = "83fd9cc451d2fa06babd1de3ff630ec3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector(".weather-img");

async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else {
    var data = await res.json();
  }

  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "clouds.png"
  }
  else if (data.weather[0].main == "Clear") {
    weatherImg.src = "clear.png"
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "drizzle.png"
  }
  else if (data.weather[0].main == "Mist") {
    weatherImg.src = "mist.png"
  }
  else if (data.weather[0].main == "Rain") {
    weatherImg.src = "rain.png"
  }
  else if (data.weather[0].main == "Snow") {
    weatherImg.src = "snow.png"
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})

