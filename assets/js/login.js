document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    if (password.length < 8 || password.startsWith(" ")) {
        Toastify({
            text: "Invalid password",
            duration: 2000,
            gravity: "top",
            position: "center",
            style: { background: "#dc3545" }
        }).showToast();
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let matchedUser = users.find(function(u) {
        return u.username === username && u.password === password;
    });

    if (matchedUser) {
        localStorage.setItem("isSignedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));

        Toastify({
            text: "Login successful!",
            duration: 2000,
            gravity: "top",
            position: "center",
            style: { background: "#28a745" }
        }).showToast();

        setTimeout(function() {
            window.location.href = "index2.html";
        }, 1500);
    } else {
        Toastify({
            text: "Incorrect username or password",
            duration: 2000,
            gravity: "top",
            position: "center",
            style: { background: "#dc3545" }
        }).showToast();
    }
});
