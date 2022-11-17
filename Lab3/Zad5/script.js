let div1 = document.getElementById('first');
let div2 = document.getElementById('second');
let div3 = document.getElementById('third');
let divCounter = document.getElementById('counter');
let buttonProp = document.getElementById('propagation');
let buttonReset = document.getElementById('reset');
let buttonChange = document.getElementById('change');
let p = document.getElementById('msg');

let counter = 0;
let prop = true;
let order = false;

div1.addEventListener('click', add1, order);
div2.addEventListener('click', add2, order);
div3.addEventListener('click', add5, order);
buttonProp.addEventListener('click', propagation, false);
buttonReset.addEventListener('click', reset, false);
buttonChange.addEventListener('click', change, false);

function counterRefresh() {
    divCounter.innerText = " Suma: " + counter;
    if (counter > 30) {
        div2.removeEventListener('click', add2, order);
        div2.style.backgroundColor = '#aa3333';
    }
    if (counter > 50) {
        div3.removeEventListener('click', add5, order);
        div3.style.backgroundColor = '#aaaa00';
    }
}

function add1(e) {
    counter++;
    counterRefresh();
    p.innerText = "nacisnąłeś niebieski o wartości 1";
}
function add2(e) {
    counter += 2;
    counterRefresh();
    p.innerText = "nacisnąłeś czerwony o wartości 2";
    if (!prop) {e.stopPropagation();}
}
function add5(e) {
    counter += 5;
    counterRefresh();
    p.innerText = "nacisnąłeś żółty o wartości 5";
    if (!prop) {e.stopPropagation();}
}

function propagation() {
    prop = !prop;
    if (buttonProp.innerText == "Stop Propagation") buttonProp.innerText = "Start Propagation";
    else buttonProp.innerText = "Stop Propagation";
}

function reset() {
    counter = 0;
    div2.addEventListener('click', add2, order);
    div3.addEventListener('click', add5, order);
    div2.style.backgroundColor = 'red';
    div3.style.backgroundColor = 'yellow';
    counterRefresh();
    p.innerText = "";
}

function change() {
    div1.removeEventListener('click', add1, order);
    div2.removeEventListener('click', add2, order);
    div3.removeEventListener('click', add5, order);
    order = !order;
    div1.addEventListener('click', add1, order);
    div2.addEventListener('click', add2, order);
    div3.addEventListener('click', add5, order);
}
