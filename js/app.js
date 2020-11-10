const burgerIcon = document.querySelector('.toggle-burger-icon');
const nav = document.querySelector('.nav-links');

burgerIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
});
