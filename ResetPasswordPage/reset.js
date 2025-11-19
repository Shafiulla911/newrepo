const form = document.getElementById("resetForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let newPass = document.getElementById("newPass").value.trim();
    let confirmPass = document.getElementById("confirmPass").value.trim();

    if (newPass === "" || confirmPass === "") {
        msg.style.color = "red";
        msg.innerText = "All fields are required!";
        return;
    }

    if (newPass !== confirmPass) {
        msg.style.color = "red";
        msg.innerText = "Passwords do not match!";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Password Reset Successful!";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
});
