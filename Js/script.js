var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");
let usersinfo;
if (localStorage.getItem("users") == null) {
    usersinfo = [];
}
else {
    usersinfo = JSON.parse(localStorage.getItem("users"));
}

function userInputsValidation() {
    usernameValidation();
    emailValidation();
    passwordValidation();
    if (usernameValidation() == true && emailValidation() == true && passwordValidation() == true) {
        return true;
    } else {
        return false
    }
}
function signupvalidation() {
    if (userInputsValidation() == true) {
        let user =
        {
            name: userName.value,
            email: email.value,
            password: password.value
        }

        usersinfo.push(user)
        localStorage.setItem("users", JSON.stringify(usersinfo));
        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");
    }
}
function signinvalidation() {
    if (email.value == "" || password.value == "") {
        fillMsg.classList.replace("d-none", "d-block");
        return false
    } else {
        fillMsg.classList.replace("d-block", "d-none");
    }

    for (var i = 0; i < usersinfo.length; i++) {
        if (usersinfo[i].email.toLowerCase() == email.value.toLowerCase() && usersinfo[i].password.toLowerCase() == password.value.toLowerCase()) {

            localStorage.setItem('sessionUsername', usersinfo[i].name)
            window.location = "index.html"
            return true;
        }
        else {
            wrongMsg.classList.replace("d-none", "d-block");
            return false;
        }
    }
}
function usernameValidation() {
    var errorName = document.getElementById("errorName");
    var regexUserName = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if (regexUserName.test(userName.value) == true && userName.value != "") {
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        errorName.classList.replace("d-block", "d-none");
        return true
    }
    else {
        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        errorName.classList.replace("d-none", "d-block");
        return false
    }
}
function emailValidation() {
    var errorEmail = document.getElementById("errorEmail");

    var regexEmail = /@[a-z]{5,10}(\.com)$/;
    if (regexEmail.test(email.value) == true && email.value != "") {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        errorEmail.classList.replace("d-block", "d-none");

        return true
    }
    else {

        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        errorEmail.classList.replace("d-none", "d-block");

        return false
    }
}
function passwordValidation() {
    var errorPassword = document.getElementById("errorPassword");
    var regexPassword = /^.{5,15}$/;
    if (regexPassword.test(password.value) == true && password.value != "") {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        errorPassword.classList.replace("d-block", "d-none");
        return true
    }
    else {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
        errorPassword.classList.replace("d-none", "d-block");
        return false
    }
}
var username = localStorage.getItem("sessionUsername");
function displayWelcomeUser() {
    document.getElementById("username").innerHTML = "Welcome " + username;

}
function logout() {
    localStorage.removeItem('sessionUsername')
}