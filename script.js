const timerFunction = () => {
    const timer = document.querySelector(".timer");
    if (timer) timer.textContent = Date.now();
};

timerFunction();

const refreshBtn = document.querySelector(".btn-style");

if (refreshBtn) refreshBtn.addEventListener("click", timerFunction);

// Contact Form

const form = document.getElementById("contactForm");
const successMsg = document.querySelector(
    "[data-testid='test-contact-success']"
);

form.addEventListener("submit", (e) => {
    let valid = true;

    const fields = ["name", "email", "subject", "message"];
    fields.forEach((id) => {
        const input = document.getElementById(id);
        const error = document.getElementById(`error-${id}`);
        error.textContent = "";

        if (!input.value.trim()) {
            error.textContent = "This field is required.";
            valid = false;
        } else if (id === "email" && !/^[^@]+@[^@]+\.[^@]+$/.test(input.value)) {
            error.textContent = "Please enter a valid email.";
            valid = false;
        } else if (id === "message" && input.value.trim().length < 10) {
            error.textContent = "Message must be at least 10 characters.";
            valid = false;
        }
    });

    if (valid) {
        successMsg.classList.remove("hidden");
        form.reset();
    } else {
        successMsg.classList.add("hidden");
    }
});