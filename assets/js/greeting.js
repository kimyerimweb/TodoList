const greeting = document.querySelector('.js-greeting'),
    form = document.querySelector('.js-form'),
    input = form.querySelector('input');
    
const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';

function saveName(name){
    localStorage.setItem(USER_LS,name);
}

function handleSubmit(event){
    event.preventDefault();
    
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.replace("non-display-form",SHOWING_CN);
    greeting.classList.replace(SHOWING_CN,"non-display-greeting");
    form.addEventListener('submit',handleSubmit);
}

function paintGreeting(name){
    form.classList.replace(SHOWING_CN,"non-display-form");
    greeting.classList.replace("non-display-greeting",SHOWING_CN);
    greeting.innerText = `Hi, ${name}`;
}

function loadName(){
    const currentUserName = localStorage.getItem(USER_LS);

    if(currentUserName===null){
        askForName();

    }else{
        paintGreeting(currentUserName);
    }
}

function init(){
    loadName();
}

init();