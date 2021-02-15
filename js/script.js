var userData = {};
var inputValidated = false;

function validateInput() {

    //Take input from user
    fetchUserInput();

    //Validation
    if (userData.username == "") {
        showErrorMessage("Please enter a username");
        return false
    }
    if (userData.password == "") {
        showErrorMessage("Please enter a password");
        return false
    }
    if (userData.password.length < 8) {
        showErrorMessage("Password must be at least 8 characters");
        return false;
    }
    if (!includeUpperCase(userData.password)) {
        showErrorMessage("Password must include upper case letters");
        return false;
    }
    if (!includeLowerCase(userData.password)) {
        showErrorMessage("Password must include lower case letters");
        return false;
    }
    if (!hasNumber(userData.password)) {
        showErrorMessage("Password must include numbers");
        return false;
    }

    //If all validation succeeded
    inputValidated = true;

    //Check username and password
    verifyLogin();
}

function fetchUserInput() {
    userData.username = document.getElementById("username").value;
    userData.password = document.getElementById("password").value;
}

function verifyLogin() {
    if (userData.username == "admin" && userData.password == "Kareem123" && inputValidated) {
        changeUserMessage("Welcome");
        hideLoginForm();
        hideErrorMessage();
        showLoginMessage();
    }
    else {
        hideLoginForm();
        hideErrorMessage();
        showLoginMessage();
    }
}

function showErrorMessage(errorMessage) {
    document.getElementById("error").innerHTML = errorMessage;
    document.getElementById("error").style.visibility = "visible";
}

function hideErrorMessage() {
    document.getElementById("error").style.visibility = "hidden";
}

function hideLoginForm() {
    document.getElementById("login-form").style.visibility = "hidden";
}

function showLoginMessage() {
    document.getElementById("userMsg").style.visibility = "visible";
}

function changeUserMessage(message) {
    document.getElementById("userMsg").innerHTML = message;
}

function hasNumber(str) {
    return /\d/.test(str);
}

function includeUpperCase(str) {
    return str.toLowerCase() != str;
}

function includeLowerCase(str) {
    return str.toUpperCase() != str;
}

/* ----------- Array of all upper case letters ----------- */
/*
    var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();

    //Upper Case Alpha Array
    upperCaseAlphabet = upperCaseAlphabet.split('');

    console.log(upperCaseAlphabet);
*/