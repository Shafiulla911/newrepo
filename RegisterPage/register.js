const form = document.getElementById("registerForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        msg.style.color = "red";
        msg.innerText = "All fields are required!";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Registration Successful!";

    setTimeout(() => {
        form.reset();
        msg.innerText = "";
    }, 2000);
});
