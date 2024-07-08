import { temples } from "./temples-list.js";

// Date formatter for footer
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const date = new Date(document.lastModified);

currentYear.innerHTML = today.getFullYear() + " &#9830 Billy Estella &#9830 " + "Philippines";

const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'medium' });
lastModified.innerHTML = "Last Modified: " + dateFormatter.format(date);

// Show navigation list
const main = document.querySelector("main");
const menuIcon = document.querySelector("#menu-icon");
menuIcon.addEventListener("click", e => {
    const navList = document.querySelector("#nav-list");
    navList.classList.add("open");
    main.style.marginTop = "180px";
});

// Hide navigation list
const closeIcon = document.querySelector("#close-icon");
closeIcon.addEventListener("click", e => {
    const navList = document.querySelector("#nav-list");
    navList.classList.remove("open");
    main.style.marginTop = "0";
});

// Display entire temple list by default
const albumContainer = document.querySelector("#album-container");  
albumContainer.innerHTML = displayTempleList(temples);

// Template function to display list of temples
function displayTempleList(obj) {
    let templeList = "";
    obj.forEach(value => {
        templeList += `
            <div class="temple-card">
                <h3>${value.templeName}</h3>
                <div>
                    <p>Location: ${value.location}</p>
                    <p>Dedicated: ${value.dedicated}</p>
                    <p>Area: ${numberWithCommas(value.area)} sq ft</p>
                </div>
                <img src="${value.imageUrl}" alt="${value.templeName}" loading="lazy" width="400" height="250">
            </div>`;
    });
    return templeList;
}

// Display number with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

// Home button - Loop through the entire temple list
const home = document.querySelector("#home");
home.addEventListener("click", () => {
    albumContainer.innerHTML = displayTempleList(temples);

    const albumTitle = document.querySelector("#album-title");
    albumTitle.innerHTML = "Home";
});

// Old button - Display filtered list of temples built before 1900
const old = document.querySelector("#old");
old.addEventListener("click", () => {
    let filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    albumContainer.innerHTML = displayTempleList(filteredTemples);

    const albumTitle = document.querySelector("#album-title");
    albumTitle.innerHTML = "Temples Dedicated Before 1900";
});

// New button - Display filtered list of temples built after 2000
const newTemples = document.querySelector("#new");
newTemples.addEventListener("click", () => {
    let filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
    albumContainer.innerHTML = displayTempleList(filteredTemples);

    const albumTitle = document.querySelector("#album-title");
    albumTitle.innerHTML = "Temples Dedicated From Year 2000";
});

// Large button - Display filtered list of temples larger than 90000 square feet
const large = document.querySelector("#large");
large.addEventListener("click", () => {
    let filteredTemples = temples.filter(temple => temple.area >= 90000);
    albumContainer.innerHTML = displayTempleList(filteredTemples);

    const albumTitle = document.querySelector("#album-title");
    albumTitle.innerHTML = "Temples Larger Than 90,000 sq ft";
});

// Small button - Display filtered list of temples smaller than 10000 square feet
const small = document.querySelector("#small");
small.addEventListener("click", () => {
    let filteredTemples = temples.filter(temple => temple.area < 10000);
    albumContainer.innerHTML = displayTempleList(filteredTemples);

    const albumTitle = document.querySelector("#album-title");
    albumTitle.innerHTML = "Temples Smaller Than 10000 sq ft";
});
