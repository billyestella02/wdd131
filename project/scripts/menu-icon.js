// menu-icon animation when clicked
// display navigation list
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('#nav-list');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("open");
    navList.classList.toggle("show-list");
});







