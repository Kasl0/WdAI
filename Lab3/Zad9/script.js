let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
let randButton = document.getElementById('rand');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let cards = [card1, card2, card3];
let current = 0;

leftButton.addEventListener('click', slideLeft, false);
rightButton.addEventListener('click', slideRight, false);
randButton.addEventListener('click', slideRand, false);

function slideLeft() {
    cards[current].style.transform = "translateX(10%)";
    cards[current].style.opacity = 0;
    cards[(current+1) % 3].style.transform = "translateX(-110%)";

    current--;
    if (current < 0) current = 2;

    cards[current].style.transform = "translateX(-50%)";
    cards[current].style.opacity = 1;
}

function slideRight() {
    cards[current].style.transform = "translateX(-110%)";
    cards[current].style.opacity = 0;
    if (current-1 >= 0) cards[current-1].style.transform = "translateX(10%)";
    else cards[2].style.transform = "translateX(10%)";

    current++;
    if (current > 2) current = 0;

    cards[current].style.transform = "translateX(-50%)";
    cards[current].style.opacity = 1;
}

function slideRand() {
    let newRand = Math.floor(Math.random() * 3);
    if (newRand + 1 == current || (current == 0 && newRand == 2)) slideLeft();
    if (current + 1 == newRand || (current == 2 && newRand == 0)) slideRight();
}
