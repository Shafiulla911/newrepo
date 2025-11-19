// ========== Dark Mode Toggle ==========
const toggleBtn = document.getElementById("modeToggle");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        toggleBtn.textContent = document.body.classList.contains("dark")
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";
    });
}


// ========== Fade-in Animation for All Pages ==========
window.onload = () => {
    const box = document.querySelector(".box");
    if (box) {
        box.style.opacity = "0";
        box.style.transform = "scale(0.9)";

        setTimeout(() => {
            box.style.transition = "0.4s ease";
            box.style.opacity = "1";
            box.style.transform = "scale(1)";
        }, 100);
    }
};


// ========== OTP Auto Move ==========
const otpInputs = document.querySelectorAll(".otp-inputs input");

otpInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && index > 0 && input.value === "") {
            otpInputs[index - 1].focus();
        }
    });
});


// ========== Auto Redirect (Email Success Page) ==========
const redirectText = document.getElementById("redirectText");

if (redirectText) {
    let count = 5;

    setInterval(() => {
        count--;
        redirectText.textContent = count;

        if (count === 0) {
            window.location.href = "login.html";
        }
    }, 1000);
}
