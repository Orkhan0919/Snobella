document.addEventListener("DOMContentLoaded", () => {
    let signupLink = document.querySelector(".dropdown-item.register");
    let loginLink = document.querySelector(".dropdown-item.login");
    let logoutBtn = document.querySelector(".dropdown-item.logout");
    let accountArea = document.querySelector(".username");
    let loginArea = document.querySelector(".btnlgn");

    const currentUser = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : null;

    if (localStorage.getItem("isSignedIn") === "true" && currentUser) {
        signupLink.style.display = "none";
        loginLink.style.display = "none";
        logoutBtn.classList.remove("d-none");

        accountArea.innerHTML = '<i class="fa-solid fa-user"></i> ' + currentUser.username;

        if (loginArea) loginArea.innerHTML = '<i class="fa-solid fa-user"></i>';
    } else {
        accountArea.innerHTML = '<i class="fa-solid fa-user"></i> Username';
        logoutBtn.classList.add("d-none");
        if (loginArea) loginArea.innerHTML = '<i class="fa-solid fa-user"></i>';
    }

    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isSignedIn");
        localStorage.removeItem("currentUser");
        window.location.reload();
    });
});
