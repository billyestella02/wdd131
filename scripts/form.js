import { products } from "./products.js";

// Footer details
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const date = new Date(document.lastModified);

currentYear.innerHTML = today.getFullYear() + " &#9830 Billy Estella &#9830 " + "Philippines";

const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'medium' });
lastModified.innerHTML = "Last Modified: " + dateFormatter.format(date);

// Display product details in dropdown list
const productName = document.querySelector('#product-name');

let productNameDropdown = `<option value="" disabled selected>Select a Product*</option>`;
products.forEach(value => {
    productNameDropdown += `
        <option value="${value.id}">${value.name}</option>
    `;
});
productName.innerHTML = productNameDropdown;

// 
// // get number of review submissions, how many times submit button is clicked
// const submitBtn = document.querySelector('#submit-btn');
// submitBtn.addEventListener('click', () => {
//     let reviewCounter = localStorage.getItem('numReview') || 0;
//     reviewCounter++;
//     localStorage.setItem('numReview', reviewCounter);
// });

