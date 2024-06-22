// Date formatter for footer
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const date = new Date(document.lastModified);

currentYear.innerHTML = today.getFullYear() + " &#9830 Billy Estella &#9830 " + "Philippines";

const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'medium' });
lastModified.innerHTML = "Last Modified: " + dateFormatter.format(date);

// Open and close nav list
function showNavlist() {
    const navList = document.querySelector("#navlist");
    navList.classList.add("open");

    const main = document.querySelector("main");
    main.style.marginTop = "10.5rem";
}

function hideNavlist() {
    const navList = document.querySelector("#navlist");
    navList.classList.remove("open");

    const main = document.querySelector("main");
    main.style.marginTop = "0";
}

