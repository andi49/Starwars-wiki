const lightsaber = document.getElementById('#lightsaber')
const baseHeight = 0
const scrollStartSound = new Audio('audio/lightsaber.mp3')
scrollStartSound.preload = 'auto'

let isScrolling = false
let scrollStopTimer

function updateLightsaberHeight () {
  if (!lightsaber) {
    return
  }

  if (!isScrolling) {
    scrollStartSound.currentTime = 0
    scrollStartSound.play().catch(() => {})
    isScrolling = true
  }

  clearTimeout(scrollStopTimer)
  scrollStopTimer = setTimeout(() => {
    isScrolling = false
  }, 150)

  const scrollAmount = window.scrollY
  console.log(scrollAmount)
  if (scrollAmount > 5) {
    lightsaber.style.boxShadow = '-1px -6px 41px 14px #00FF28'
  } else {
    lightsaber.style.boxShadow = ''
  }
  lightsaber.style.height = `${baseHeight + scrollAmount}vh`
}

window.addEventListener('scroll', updateLightsaberHeight)
