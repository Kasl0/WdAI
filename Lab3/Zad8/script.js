let password = document.getElementById('password');
let repeat = document.getElementById('repeat');
let eye1Img = document.getElementById('eye1');
let eye2Img = document.getElementById('eye2');
let msg = document.getElementById('msg');
let lengthImg = document.getElementById('length');
let specialImg = document.getElementById('special');
let capitalImg = document.getElementById('capital');
let digitImg = document.getElementById('digit');

password.addEventListener('input', verify, false);
repeat.addEventListener('input', equals, false);
eye1Img.addEventListener('click', eye1click, false);
eye2Img.addEventListener('click', eye2click, false);

function verify() {
    if(password.value.length >= 8) lengthImg.src = "img/yes.png";
    else lengthImg.src = "img/no.png";

    let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(password.value)) specialImg.src = "img/yes.png";
    else specialImg.src = "img/no.png";

    let capital = false;
    for (let i = 0; i < password.value.length; i++) {
        if (password.value.charAt(i).toLowerCase() != password.value.charAt(i).toUpperCase() && password.value.charAt(i) == password.value.charAt(i).toUpperCase())
        capital = true;
    }
    if (capital) capitalImg.src = "img/yes.png";
    else capitalImg.src = "img/no.png";

    let digit = false;
    for (let i = 0; i < password.value.length; i++) {
        if (password.value.charAt(i) >= '0' && password.value.charAt(i) <= '9') digit = true;
    }
    if (digit) digitImg.src = "img/yes.png";
    else digitImg.src = "img/no.png";

    equals()
}

function equals() {
    if(repeat.value == password.value) {
        if (repeat.value != "") repeat.style.border = "1px solid green";
        else repeat.style.border = "1px solid lightgray";
        msg.innerText = "";
    }
    else {
        repeat.style.border = "1px solid red";
        msg.innerText = "Password does not matches";
    }
}

function eye1click() {
    if (password.type == "text") {
        password.type = "password";
        eye1Img.src = "img/eye.png";
    }
    else {
        password.type = "text";
        eye1Img.src = "img/eyeClosed.png";
    }
}

function eye2click() {
    if (repeat.type == "text") {
        repeat.type = "password";
        eye2Img.src = "img/eye.png";
    }
    else {
        repeat.type = "text";
        eye2Img.src = "img/eyeClosed.png";
    }
}
