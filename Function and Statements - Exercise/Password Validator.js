
function ValidPassword(password) {
    let valid = true;

    if (6 > password.length || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        valid = false;
    }

    if (/^[A-Za-z0-9]*$/.test(password)) {
    } else {
        console.log("Password must consist only of letters and digits");
        valid = false;
    }

    if (/\d{2,}/.test(password)) {
    } else {
        console.log("Password must have at least 2 digits");
        valid = false;
    }

    if (valid) {
        console.log("Password is valid");
    }
}   


ValidPassword('mypass123');