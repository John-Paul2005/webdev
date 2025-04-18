// signup.js

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting normally

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all fields!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Example of signup validation
    alert("Account created successfully!");
    // Redirect to login page
    window.location.href = "login.html";
});
