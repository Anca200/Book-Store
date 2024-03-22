//Nav Menu
//Navbar Menu
const nav = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',() => {
    nav.classList.toggle("nav--open");
})