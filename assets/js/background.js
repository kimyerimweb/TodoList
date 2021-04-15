const backColor = document.querySelector(".grow-background")

function Setpercent() {
  const currentTime = hours * 60 + minutes
  const currentTimeRate = (currentTime / 1440) * 100
  backColor.style.height = `${currentTimeRate}%`
}

function init() {
  Setpercent()
  setInterval(Setpercent, 1000)
}

init()
