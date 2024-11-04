// VALIDACION DEL FORMULARIO DE CONTACTO
let contactForm = document.getElementById('contactForm');
let nameInput = document.getElementById('name');
let nameValidation = document.getElementById('nameValidation');
let emailInput = document.getElementById('email');
let emailValidation = document.getElementById('emailValidation');
let subjectInput = document.getElementById('subject');
let subjectValidation = document.getElementById('subjectValidation');
let messageInput = document.getElementById('message');
let messageValidation = document.getElementById('messageValidation');

const validateInput = (input, validationElement, validationFunction) => {
    if (!validationFunction(input.value.trim())) {
        validationElement.classList.remove('hidden');
        return false;
    } else {
        validationElement.classList.add('hidden');
        return true;
    }
};

const validateName = () => validateInput(nameInput, nameValidation, (name) => name !== '');
const validateEmail = () => validateInput(emailInput, emailValidation, (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
const validateSubject = () => validateInput(subjectInput, subjectValidation, (subject) => subject !== '');
const validateMessage = () => validateInput(messageInput, messageValidation, (message) => message !== '');

const validateForm = () => {
    return validateName() && validateEmail() && validateSubject() && validateMessage();
};

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Form submitted successfully!');
        this.submit();
    }
});

const inputs = [nameInput, emailInput, subjectInput, messageInput];
inputs.forEach(input => {
    input.addEventListener('input', function () {
        switch (input.id) {
            case 'name':
                validateName();
                break;
            case 'email':
                validateEmail();
                break;
            case 'subject':
                validateSubject();
                break;
            case 'message':
                validateMessage();
                break;
            default:
                break;
        }
    });
});