function checkLogin() {
    // Get the username and password from the textboxes
    let username = document.getElementById('usernameTextbox').value;
    let password = document.getElementById('passwordTextbox').value;

    // Using nesting - if statements INSIDE of another if statement
    // Check for correct username
    if (username == 'admin') {

        // Check for the correct password
        if (password == "1234") {
            // Show the image and set its src
            document.getElementById('profilePic').hidden = false;
            document.getElementById('profilePic').src = 'jeremy.png';
        }
    }
}