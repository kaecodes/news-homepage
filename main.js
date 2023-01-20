const menuBars = document.querySelector('.menu-bars'); 
const menuClose = document.querySelector('.menu-close'); 
const navLinks = document.querySelector('.links'); 
const overlayActive = document.querySelector('.overlay'); 

menuBars.addEventListener('click', () => {
  navLinks.classList.toggle('active'); 
  menuClose.classList.toggle('active'); 
  overlayActive.classList.toggle('active'); 
})

menuClose.addEventListener('click', () => {
  navLinks.classList.remove('active'); 
  menuClose.classList.remove('active'); 
  overlayActive.classList.remove('active'); 
})
