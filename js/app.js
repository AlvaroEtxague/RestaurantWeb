const burgerIcon = document.querySelector('.toggle-burger-icon');
const nav = document.querySelector('.nav-links');
const mainSection = document.querySelector('.main-section');

const starters = document.querySelector('#starter-icon');
const starterRow = document.querySelector('.starter-row');

const beef = document.querySelector('#beef-icon');
const beef_row = document.querySelector('.beef-row');

const chicken = document.querySelector('#chicken-icon');
const chicken_row = document.querySelector('.chicken-row');

const fish = document.querySelector('#fish-icon');
const fish_row = document.querySelector('.fish-row');

burgerIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  mainSection.classList.toggle('mutate');
});

starters.addEventListener('click', () => {
  starterRow.classList.toggle('active');
});

beef.addEventListener('click', () => {
  beef_row.classList.toggle('active');
});

chicken.addEventListener('click', () => {
  chicken_row.classList.toggle('active');
});

fish.addEventListener('click', () => {
  fish_row.classList.toggle('active');
});
