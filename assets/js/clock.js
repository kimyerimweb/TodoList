const time = document.querySelector(".js-clock")
let date
let hours
let minutes

function getTime() {
  date = new Date()
  hours = date.getHours()
  minutes = date.getMinutes()
  time.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`
}

function init() {
  getTime()
  setInterval(getTime, 1000)
}

init()
