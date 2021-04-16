const weather = document.querySelector(".js-weather")
const temp = document.querySelector(".js-temp")
const place = document.querySelector(".js-location")
const API_KEY = "c63881729f07f1139c4cc45ec7fb5362"
const COORDS = "coords"

function getWeather(lat, lng) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      console.log(json)
      weather.innerText = json.weather[0].main
      temp.innerText = `${json.main.temp} ℃`
      place.innerText = json.name
    })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  }
  saveCoords(coordsObj)
  getWeather(latitude, longitude)
}

function handleGeoError() {
  console.log("error")
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS)
  if (loadedCoords === null) {
    askForCoords()
  } else {
    const parseCoords = JSON.parse(loadedCoords)
    getWeather(parseCoords.latitude, parseCoords.longitude)
  }
}

function init() {
  loadCoords()
}

init()
