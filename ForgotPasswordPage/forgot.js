const form = document.getElementById("forgotForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();

    if (email === "") {
        msg.style.color = "red";
        msg.innerText = "Email is required!";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Reset link has been sent to your email!";

    // Reset the form after a few seconds
    setTimeout(() => {
        form.reset();
        msg.innerText = "";
    }, 2000);
});
