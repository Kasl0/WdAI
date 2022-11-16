let buttonAdd = document.getElementById('add');
let buttonRemove = document.getElementById('remove');

let counter = 1;

buttonAdd.addEventListener('click', add, false);
buttonRemove.addEventListener('click', remove, false);

function add() {
    let element = document.createElement('li');
    let ul = document.querySelector("#list");
    element.textContent = "Element " + counter;
    counter++;
    ul.append(element);
}

function remove() {
    let ul = document.querySelector("#list");
    ul.removeChild(ul.childNodes[0]);
}
