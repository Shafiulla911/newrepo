const form = document.getElementById("otpForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let otp = document.getElementById("otp").value.trim();

    if (otp.length !== 6) {
        msg.style.color = "red";
        msg.innerText = "Enter a valid 6-digit OTP!";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "OTP Verified! Redirecting...";

    setTimeout(() => {
        window.location.href = "reset.html";
    }, 1500);
});
