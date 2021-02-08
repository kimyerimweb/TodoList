const body = document.querySelector("body");

function paintBackgoundImage(number){
    const image = new Image();
    image.src = `assets/images/${number}.jpg`; //변경 가능
    image.classList.add("bgImg");
    body.appendChild(image);
}

function genRandom(){
    const random = Math.ceil((Math.random()*3));
    return random;
}

function init(){
    const randomNum = genRandom();
    paintBackgoundImage(randomNum);
}

init();