const apiKey="cb944bed3cb71bc24116519dfe42e09f";
const weatherDataEle=document.querySelector(".weather-data");
const cityNameEle=document.querySelector("#cityname");
const fromEle=document.querySelector("form");
const imgIcon=document.querySelector(".icon");

fromEle.addEventListener("submit",(e)=>{
    e.preventDefault()
  const cityValue=cityNameEle.value

  getWeatherData(cityValue)
})
async function getWeatherData(cityValue){
   try{
     const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
    if(!response.ok){
        throw new Error("Network is not ok!")
    }
    const data=await  response.json()
// console.log(data);
    const temprature = Math.floor(data.main.temp)
    const description= data.weather[0].description
    const icon = data.weather[0].icon
    const details=[
      `Feels Like: ${Math.floor(data.main.feels_like)}°C`,`Humidity: ${data.main.humidity}%`,`Wind Speed:${data.wind.speed}km/h`
    ]
    weatherDataEle.querySelector(".temp").textContent=`${temprature}°C`
    weatherDataEle.querySelector(".desc").textContent=`${description}`
    imgIcon.innerHTML=` <img src="https://openweathermap.org/img/wn/${icon}.png"alt="">`
   weatherDataEle.querySelector(".details").innerHTML =
  details.map(d => `<div>${d}</div>`).join("");
}catch(err){
}
} 
