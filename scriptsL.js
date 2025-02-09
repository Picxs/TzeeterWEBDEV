const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

function validateForm() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailValue && passwordValue) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }

    // Validação do email
    if (emailValue && !/\S+@\S+\.\S+/.test(emailValue)) {
        emailError.textContent = "Por favor, insira um email válido.";
    } else {
        emailError.textContent = "";
    }
}
