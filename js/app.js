const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.links');
  const mainSection = document.querySelector('.main-section');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};

navSlide();
