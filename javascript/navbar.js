const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const imgStarfighter = document.querySelector('.imgStarfighter')

menuBtn.addEventListener('click', () => {
  nav.classList.toggle("active");
  imgStarfighter.classList.toggle('active');
});