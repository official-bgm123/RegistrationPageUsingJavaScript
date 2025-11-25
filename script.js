document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const pass = document.getElementById("userPass").value;
    const cpass = document.getElementById("userCpass").value;
    const err = document.getElementById("error");

    // Clear old message
    err.style.color = "red";
    err.textContent = "";

    // Validation checks
    if (!name || !email || !pass || !cpass) {
        err.textContent = "All fields are required!";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        err.textContent = "Invalid email format!";
        return;
    }

    if (pass.length < 6) {
        err.textContent = "Password must be at least 6 characters!";
        return;
    }

    if (pass !== cpass) {
        err.textContent = "Passwords do not match!";
        return;
    }

    // Success message
    err.style.color = "green";
    err.textContent = "Registration Successful!";

    // Reset form after 2 seconds
    setTimeout(() => {
        document.getElementById("regForm").reset();
        err.textContent = "";
    }, 2000);
});