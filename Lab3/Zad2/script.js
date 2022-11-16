let img = document.createElement('img');
let div = document.querySelector("#img");
div.append(img);
let button = document.getElementById('button');

const fotos = ["gory.JPG", "morze.jpg", "las.jpg"];
const borders = ["3px solid red", "3px solid blue", "3px solid green"];

function displayFoto(n) {
    img.src = fotos[n];
    img.style.border = borders[n];
}

let current = 0;
displayFoto(current);
img.height = 400;

button.addEventListener('click', changeFoto, false);

function changeFoto() {
    current++;
    if (current > 2) current = 0;
    displayFoto(current);
}
