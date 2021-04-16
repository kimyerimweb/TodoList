const greeting = document.querySelector(".js-greeting"),
  greetingForm = document.querySelector(".js-greeting-form"),
  greetingInput = greetingForm.querySelector(".js-greeting-input")

const USER_LS = "userName"
const SHOWING = "showing"

function saveName(text) {
  localStorage.setItem(USER_LS, text)
}

function handleSubmit(e) {
  e.preventDefault()

  const currentUserName = greetingInput.value
  paintGreeting(currentUserName)
  saveName(currentUserName)
}

function askForName() {
  greetingForm.classList.replace("non-display-form", SHOWING)
  greeting.classList.replace(SHOWING, "non-display-greeting")
  greetingForm.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
  greetingForm.classList.replace(SHOWING, "non-display-form")
  greeting.classList.replace("non-display-greeting", SHOWING)
  greeting.innerText = `Hi, ${text}`
}

function loadName() {
  const currentUserName = localStorage.getItem(USER_LS)

  if (currentUserName === null) {
    askForName()
  } else {
    paintGreeting(currentUserName)
  }
}

function init() {
  loadName()
}

init()
