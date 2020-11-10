const burgerIcon = document.querySelector('.toggle-burger-icon');
const nav = document.querySelector('.nav-links');
const mainSection = document.querySelector('.main-section');
burgerIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  mainSection.classList.toggle('mutate');
});
