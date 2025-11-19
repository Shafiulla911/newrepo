const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        msg.style.color = "red";
        msg.innerText = "All fields are required!";
        return;
    }

    // Simple example — you can replace with backend API call
    if (email === "test@gmail.com" && password === "12345") {
        msg.style.color = "green";
        msg.innerText = "Login Successful!";
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid email or password!";
    }
});
