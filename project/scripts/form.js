const contactForm = document.querySelector('.contact-form');
const senderName = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}

contactForm.addEventListener('submit', () => {
    e.preventDefault();

    const formData = {
        name: senderName.value,
        email: email.value,
        message: message.value
    }

    console.log(formData);

    saveFormData(formData);
});

console.log(JSON.parse(localStorage.getItem('formData')));