const todoForm = document.querySelector(".js-todo-form"),
    todoInput = todoForm.querySelector("input"),
    todoUl = document.querySelector(".todo-ul"),
    TODOS_LS = 'currentToDos';

let todoArray = [],
    initID = 1;

function saveTodos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(todoArray));
}

function deleteTodos(event){
    const btn = event.target;
    const li = btn.parentNode;
    const removeTodosID = li.id;
    todoUl.removeChild(li);
    const cleanArray = todoArray.filter(function(todo){
        return todo.id !== Number(removeTodosID);
    })
    todoArray = cleanArray;
    saveTodos();
}

function paintTodos(text){
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener("click",deleteTodos);
    const span = document.createElement('span');
    const newID = initID;
    btn.innerText = 'delete';
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(btn);
    li.id = newID;
    todoUl.appendChild(li);

    const todoObj={
        text: text,
        id: newID,
    }
    todoArray.push(todoObj);
    saveTodos();
    initID++;
}

function handleSubmitTodos(event){
    event.preventDefault();

    const todos = todoInput.value;
    paintTodos(todos);
    todoInput.value='';
}

function loadToDoList(){
    const currentTODOS = localStorage.getItem(TODOS_LS);
    if(currentTODOS!==null)
    {
        const parseTodos = JSON.parse(currentTODOS);
        parseTodos.forEach(function(todo) {
            paintTodos(todo.text);
        });
    }
}

function init(){
    loadToDoList();
    todoForm.addEventListener("submit",handleSubmitTodos);
}

init();