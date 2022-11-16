let buttonAdd = document.getElementById('add');
let buttonEvent = document.getElementById('event');
let divCounter = document.getElementById('counter');

let counter = 0;
let eventHandler = true;

buttonAdd.addEventListener('click', addFunction, false);
buttonEvent.addEventListener('click', eventFunction, false);

function addFunction() {
    counter++;
    divCounter.innerText = "Przyciśnięcia: " + counter;
}

function eventFunction() {
    counter = 0;
    divCounter.innerText = "Przyciśnięcia: " + counter;
    if (eventHandler) {
        buttonAdd.removeEventListener('click', addFunction, false);
        buttonEvent.innerText = "Przypnij zdarzenie";
        eventHandler = false;
    }
    else {
        buttonAdd.addEventListener('click', addFunction, false);
        buttonEvent.innerText = "Odepnij zdarzenie";
        eventHandler = true;
    }
}
