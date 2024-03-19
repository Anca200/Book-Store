//Animations
AOS.init();

//Nav

const navbar = document.querySelector('nav')

window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})