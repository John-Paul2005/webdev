// login.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting normally

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both fields!");
        return;
    }

    // Example login validation
    if (email === "user@gmail.com" && password === "user123") {
        alert("Login successful!");
        // Redirect to homepage or dashboard
        window.location.href = "sample.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
