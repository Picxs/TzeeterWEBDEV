const submitButton = document.getElementById("signupButton");
submitButton.disabled = true;  // Inicialmente desabilitado

// Obtendo os campos de formulário e as mensagens de erro
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const yearInput = document.getElementById("year");
const termsInput = document.getElementById("terms");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const dateError = document.getElementById("dateError");
const privacyPolicyError = document.getElementById("privacyPolicyError");

// Adicionando ouvintes de eventos para cada campo de entrada
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);
monthInput.addEventListener("input", validateForm);
dayInput.addEventListener("input", validateForm);
yearInput.addEventListener("input", validateForm);
termsInput.addEventListener("input", validateForm);

document.getElementById("signupForm").addEventListener("submit", validateSignupForm);

function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function(error) {
        error.textContent = ""; 
        error.style.color = ""; 
    });
}

// Função de validação do formulário
function validateSignupForm(event) {
    event.preventDefault(); 
    
    let formValid = true; 

   
    clearErrors();

    formValid &= validateName();
    formValid &= validateEmail();
    formValid &= validatePassword();
    formValid &= validateConfirmPassword();
    formValid &= validateDate();
    formValid &= validatePrivacyPolicy();

    submitButton.disabled = !formValid;
}

function validateForm() {
    let formValid = true;

    // Validar campos
    formValid &= validateName();
    formValid &= validateEmail();
    formValid &= validatePassword();
    formValid &= validateConfirmPassword();
    formValid &= validateDate();
    formValid &= validatePrivacyPolicy();


    submitButton.disabled = !formValid;
}

// Funções de validação de cada campo

function validateName() {
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Nome é obrigatório.";  
        nameError.style.color = "red";  
        return false;
    } else {
        nameError.textContent = ""; 
    }
    return true;
}

function validateEmail() {
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email é obrigatório.";  
        emailError.style.color = "red";  
        return false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Por favor, insira um email válido.";  
        emailError.style.color = "red";  
        return false;
    } else {
        emailError.textContent = ""; 
    }
    return true;
}

function validatePassword() {
    const passwordError = document.getElementById("passwordError");
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Senha é obrigatória.";  
        passwordError.style.color = "red";  
        return false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = "A senha deve ter pelo menos 6 caracteres."; 
        passwordError.style.color = "red";  
        return false;
    } else {
        passwordError.textContent = ""; 
    }
    return true;
}

function validateConfirmPassword() {
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPasswordInput.value.trim() === "") {
        confirmPasswordError.textContent = "Confirmação de senha é obrigatória."; 
        confirmPasswordError.style.color = "red";  
        return false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "As senhas não coincidem."; 
        confirmPasswordError.style.color = "red";  
        return false;
    } else {
        confirmPasswordError.textContent = ""; 
    }
    return true;
}

function validateDate() {
    const dateError = document.getElementById("dateError");
    if (!monthInput.value || !dayInput.value || !yearInput.value) {
        dateError.textContent = "Data de nascimento é obrigatória.";  
        dateError.style.color = "red";  
        return false;
    } else {
        dateError.textContent = ""; 
    }
    return true;
}

function validatePrivacyPolicy() {
    const privacyPolicyError = document.getElementById("privacyPolicyError");
    if (!termsInput.checked) {
        privacyPolicyError.textContent = "Você precisa concordar com as políticas de privacidade.";  
        privacyPolicyError.style.color = "red"; 
        return false;
    } else {
        privacyPolicyError.textContent = "";
    }
    return true;
}
