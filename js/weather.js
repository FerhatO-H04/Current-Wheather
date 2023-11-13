const url = "https://api.openweathermap.org/data/2.5/"
const key = "99f854b4ee152b8fccf2afb1c5f75c7a"

const setQuery = (e) =>{
  if(e.keyCode == '13')
    getResult(searchBar.value);
  
}




const getResult = (cityName) =>{
  searchBar.value = "";
  //console.log(cityName)
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
  fetch(query)
  .then(weather =>  weather.json())
  .then(displayResult)
}

const displayResult = (result) =>{

  console.log(result);

  let city = document.querySelector("#city")
  city.innerText = `${result.name.toUpperCase()}`
  let temp = document.querySelector("#temp")
  temp.innerText = `${result.main.temp.toFixed(1)}°C `
  let desc = document.querySelector("#desc")
  desc.innerText = `${result.weather["0"].description.toUpperCase()}`
  let min = document.querySelector("#min")
  min.textContent =`${result.main.temp_min.toFixed(1)}`
  let max = document.querySelector("#max")
  max.textContent =`${result.main.temp_max.toFixed(1)}`
  let feel = document.querySelector("#feel")
  feel.textContent = `Reel Feel ${result.main.feels_like.toFixed(1)}°C `
  let wind = document.querySelector("#wind")
  wind.textContent = `${result.wind.speed}`
  let clouds = document.querySelector("#clouds")
  clouds.textContent = `${result.clouds.all}`
  let gust = document.querySelector("#gust")
  gust.textContent = `${result.wind.gust}`
  const img = `${result.weather["0"].icon}`
  let icon = document.querySelector("#icon")
  icon.src = `https://openweathermap.org/img/w/${img}.png`
  
}


const searchBar = document.getElementById("searchBar")
searchBar.addEventListener("keypress", setQuery)

const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click",()=>{
  getResult(searchBar.value);
})



const formatTime= (unit) => {
  return unit < 10 ? `0${unit}` : unit;
}

const updateClock = () =>{
const now = new Date()
const hours = formatTime(now.getHours());
const minutes = formatTime(now.getMinutes());
const seconds = formatTime(now.getSeconds());
const time = document.querySelector("#time")
time.innerText = `${hours}:${minutes}:${seconds}`
}
setInterval(updateClock,1000);



