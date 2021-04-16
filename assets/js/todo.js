const todoForm = document.querySelector(".js-todo-form")
const todoInput = todoForm.querySelector("input")
const todoUl = document.querySelector(".todo-ul")
const TODO_LS = "currentTodoList"

let todoList = []
let newID = 0

function saveTodos() {
  localStorage.setItem(TODO_LS, JSON.stringify(todoList))
}

function deleteTodos(e) {
  const btn = e.target
  const li = btn.parentNode
  const removeContent = li.id
  todoUl.removeChild(li)
  const clearList = todoList.filter(function (element) {
    return element.id !== Number(li.id)
  })
  todoList = clearList
  saveTodos()
}

function paintToDo(text) {
  const li = document.createElement("li")
  const delbtn = document.createElement("button")
  const todo_span = document.createElement("span")
  delbtn.addEventListener("click", deleteTodos)
  newID++
  delbtn.innerText = "delete"
  todo_span.innerText = text
  todoUl.appendChild(li)
  li.id = newID
  li.appendChild(todo_span)
  li.appendChild(delbtn)
  const obj = {
    text: text,
    id: newID,
  }
  todoList.push(obj)
  saveTodos()
}

function handleSubmitTodos(e) {
  e.preventDefault()

  const currentTodos = todoInput.value
  paintToDo(currentTodos)
  todoInput.value = ""
}

function loadTodos() {
  const str_toDos = localStorage.getItem(TODO_LS)
  const toDos = JSON.parse(str_toDos)
  if (toDos !== null) {
    for (var k in toDos) {
      paintToDo(toDos[k].text)
    }
  }
}

function init() {
  loadTodos()
  todoForm.addEventListener("submit", handleSubmitTodos)
}

init()
