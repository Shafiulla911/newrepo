// Redirect to login page after 5 seconds
let countdown = 5;
const redirectText = document.getElementById("redirectText");

const timer = setInterval(() => {
    countdown--;
    redirectText.textContent = countdown;

    if (countdown === 0) {
        clearInterval(timer);
        window.location.href = "login.html";
    }
}, 1000);

// Fade-in animation for the success box
window.onload = () => {
    const box = document.querySelector(".box");
    box.style.opacity = "0";
    box.style.transform = "scale(0.9)";

    setTimeout(() => {
        box.style.transition = "0.4s ease";
        box.style.opacity = "1";
        box.style.transform = "scale(1)";
    }, 100);
};
