const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const date = new Date(document.lastModified);

currentYear.innerHTML = today.getFullYear() + " &#9830 Billy Estella &#9830 " + "Philippines";

const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'medium' });
lastModified.innerHTML = "Last Modified: " + dateFormatter.format(date);
