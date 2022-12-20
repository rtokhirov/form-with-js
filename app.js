let form = document.querySelector('form');
let ism = document.getElementById('ism')
let email = document.getElementById('email')
let pass1 = document.getElementById('pass1')
let pass2 = document.getElementById('pass2')
let pass2CH = document.getElementById('pass2CH')

let ismUzun = false;
let parolmos = true;


function ismUzunlik() {
    if (ism.value.length >= 6 && ism.value.length <= 20) {
        document.getElementById('ismCH').textContent = "";
        ism.style = "box-shadow: 0px 0px 10px 3px rgb(83, 243, 20);";
    } else {
        document.getElementById('ismCH').textContent = "Minimum 6 ta maximum 20 ta  harfdan iborat bo'lishi kerak!";
        ism.style = "box-shadow: 0px 0px 10px 3px red;";
    }
}

function emailmoslik() {
    if (!email.value.includes("@")) {
        email.style = "box-shadow: 0px 0px 10px 3px red;";
        document.getElementById('emailCH').textContent = 'Yaroqli email kirit!'
    } else {
        document.getElementById('emailCH').textContent = "";
        email.style = "box-shadow: 0px 0px 10px 3px rgb(83, 243, 20);";
    }
}

function paroluzunlik() {
    if (pass1.value.length >= 6 && pass1.value.length <= 20) {
        document.getElementById('pass1CH').textContent = "";
        pass1.style = "box-shadow: 0px 0px 10px 3px rgb(83, 243, 20);";
        parolmos = true
    } else {
        document.getElementById('pass1CH').textContent = "parol kamida 6 ta belgidan iborat bo'lishi kerak!";
        pass1.style = "box-shadow: 0px 0px 10px 3px red;";
        parolmos = false
    }
}

function parolmoslik() {
    if (parolmos) {
        if (pass1.value != pass2.value) {
            pass2CH.textContent = "parol mos emas"
            pass2.style = "box-shadow: 0px 0px 10px 3px red;";
            parolmos2 = true;
        } else {
            pass2CH.textContent = ""
            pass2.style = "box-shadow: 0px 0px 10px 3px rgb(83, 243, 20);";
        }
    } else {
        pass2CH.textContent = ""
        pass2.style = "box-shadow: 0px 0px 10px 3px red;";

    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    ismUzunlik()

    emailmoslik()

    paroluzunlik();

    parolmoslik();


})