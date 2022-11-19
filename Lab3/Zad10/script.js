let page = document.getElementById('page');
let area = document.getElementById('area');
let circle = document.getElementById('circle');
let msg = document.getElementById('msg');

page.addEventListener('click', pageClick, false);
area.addEventListener('click', areaClick, false);

function pageClick() {
    msg.innerText = "Naciśnięto poza obszarem wyznaczonym";
}

function areaClick(e) {
    e.stopPropagation();
    msg.innerText = "";
    circle.style.transform = "translate(" + (e.clientX-15) + "px, " + (e.clientY-15) + "px)";
}
