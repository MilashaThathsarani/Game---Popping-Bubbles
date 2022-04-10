let bubbles = ['one', 'two', 'three','four' ,'five'];
let windowWidth = window.innerWidth;
let body = document.body;
let windowHeight = window.innerHeight;
let scores = document.querySelectorAll('.score');
let noPop = 0;
let total = 30;
let currentBubble = 0;
let gameOver = false;
let shadow = document.querySelector('.shadow');
let startBtn = document.querySelector('.start-btn');

function createBubble(){
    let div = document.createElement('div')
    let rand = Math.floor(Math.random() * bubbles.length);
    div.className = 'bubble bubble-'+ bubbles[rand];
    rand = Math.floor(Math.random() * (windowWidth - 150));
    div.style.left = rand + 'px';

    document.body.appendChild(div);

    animateBubble(div);
}

function animateBubble(element) {
    let position = 0;
    let random = Math.floor(Math.random() * 6 - 3);
    let interval = setInterval(frame,12 - Math.floor(noPop / 10) + random);

    function frame() {
        if(position >=(windowHeight + 150)&&
            (document.querySelector('[data-number ="'+ element.dataset.number +'"]')
            !==null)){
            clearInterval(interval);
        }
        else{
            position++;
            element.style.top = windowHeight = position + 'px';
        }
    }
}

function deleteBubble() {

}

