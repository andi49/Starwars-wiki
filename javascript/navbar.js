const menuBtn = document.querySelector('.menu-toggle')
const nav = document.querySelector('.site-nav')
const imgStarfighter = document.querySelector('.imgStarfighter')
const audioBasePath = window.location.pathname.toLowerCase().includes('/src/')
  ? '../audio/'
  : 'audio/'

const clicksound = new Audio(`${audioBasePath}tiefightershot.mp3`)
clicksound.preload = 'auto'

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  imgStarfighter.classList.toggle('active')
  clicksound.play().catch(() => {})
})
