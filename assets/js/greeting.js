const greeting = document.querySelector('.js-greeting'),
    greetingForm = document.querySelector('.js-greeting-form'),
    greetingInput = greetingForm.querySelector('input');
    
const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    
    const currentValue = greetingInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    greetingForm.classList.replace("non-display-form",SHOWING_CN);
    greeting.classList.replace(SHOWING_CN,"non-display-greeting");
    greetingForm.addEventListener('submit',handleSubmit);
}

function paintGreeting(text){
    greetingForm.classList.replace(SHOWING_CN,"non-display-form");
    greeting.classList.replace("non-display-greeting",SHOWING_CN);
    greeting.innerText = `Hi, ${text}`;
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