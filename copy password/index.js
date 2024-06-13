const length = 12;

let lowercase = "qwertyuiopasdfghjklzxcvbnm";
let uppercase = lowercase.toUpperCase();
let numbers = "1234567890";
let symbols = "!@#$%^&*():><?";

const allCars = lowercase + uppercase + symbols + numbers;

function createPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allCars[Math.floor(Math.random() * allCars.length)];
    }

    // Select the password element using the `document.getElementById()` method
    const passwordBox = document.getElementById("password");

    passwordBox.value = password;
}

function copyPassword() {
    // Select the password element using the `document.getElementById()` method
    const passwordBox = document.getElementById("password");

    passwordBox.select();
    document.execCommand("copy");
}