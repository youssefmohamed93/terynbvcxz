// Show Menu Icon On Mobile Devices //
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar ul");

menuIcon.onclick = function () {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
};