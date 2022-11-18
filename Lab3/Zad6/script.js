let contacts = document.getElementById('contacts');
let submitButton = document.getElementById('submitButton');
let nameInput = document.getElementById('name');
let phoneInput = document.getElementById('phone');

submitButton.addEventListener('click', submit, false);

function submit() {
    let phone = phoneInput.value.replace(/\s/g,''); // usuwa białe znaki
    let phoneLen = phone.length;

    let plus = 0;
    if (phone.charAt(0) == '+') plus = 1;

    if (phoneLen != 9+plus && phoneLen != 12+plus) return;
    for (let i = 0+plus; i<phoneLen; i++) {
        if (phone.charAt(i) < '0' || phone.charAt(i) > '9') return;
    }
    
    let names = nameInput.value.split(" ");
    if (names.length != 2 && names.length != 3) return;
    for (let name of names) {
        for (let i = 0; i < name.length; i++) {
            if (name.charAt(i).toLowerCase() == name.charAt(i).toUpperCase() && name.charAt(i) != '-') return;
        }
        if (name.charAt(0) != name.charAt(0).toUpperCase()) return;
        
    }


    let newContact = document.createElement('div');
    newContact.className = "contact";

    newContact.innerHTML = "<div class='info'><h1>" + nameInput.value + "</h1><h2>" + phoneInput.value + "</h2></div>";
    nameInput.value = "";
    phoneInput.value = "";

    let newIcon = document.createElement('img');
    newIcon.src = "trashIcon.png";
    newIcon.addEventListener('click', remove, false);
    newContact.append(newIcon);
    contacts.append(newContact);
}

function remove(e) {
    contacts.removeChild(e.currentTarget.parentNode);
}
