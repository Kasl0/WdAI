let promptButton = document.getElementById('button');
let helloText = document.getElementById('hello');

promptButton.addEventListener('click', displayPrompt, false);

function displayPrompt() {
    let name = prompt("Podaj imię");
    if (name.slice(-1) == 'a') {
        helloText.innerText = "Witamy Panią " + name + "!";
    }
    else {
        helloText.innerText = "Witamy Pana " + name + "!";
    }
}
