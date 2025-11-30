document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if (password.length < 8) {
        Toastify({ text: "Password must be at least 8 characters", duration: 2000, gravity: "top", position: "center", style: { background: "#dc3545" } }).showToast();
        return;
    }

    if (password.startsWith(" ")) {
        Toastify({ text: "Password cannot start with a space", duration: 2000, gravity: "top", position: "center", style: { background: "#dc3545" } }).showToast();
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existUser = users.find(function(u) {
        return u.username === username;
    });

    if (existUser) {
        Toastify({ text: "Username already taken", duration: 2000, gravity: "top", position: "center", style: { background: "#dc3545" } }).showToast();
        return;
    }

    let user = {
        id: crypto.randomUUID(),
        name: name,
        username: username,
        email: email,
        password: password
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    Toastify({ text: "Registration successful!", duration: 2000, gravity: "top", position: "center", style: { background: "#28a745" } }).showToast();

    setTimeout(function() {
        window.location.href = "login.html";
    }, 1500);
});
