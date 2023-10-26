javascript
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const errorMessage = document.getElementById("error-message");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate the password match
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm_password").value;

        if (password !== confirm_password) {
            errorMessage.innerText = "Passwords do not match.";
        } else {
            errorMessage.innerText = ""; // Clear any previous error messages

            // You can send the form data to your server here if needed
        }
    });
});