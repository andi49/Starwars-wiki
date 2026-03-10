document.addEventListener('DOMContentLoaded', () => {
  const lightsaber = document.getElementById('lightsaber')
  const baseHeight = 0
  const scrollStartSound = new Audio('audio/lightsaber.mp3')
  scrollStartSound.preload = 'auto'

  let isScrolling = false
  let scrollStopTimer

  function updateLightsaberHeight () {
    const maxsabervh = window.innerHeight * 0.8
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
    if (scrollAmount > maxsabervh) {
      return
    }
    console.log(scrollAmount)
    console.log(maxsabervh)
    if (scrollAmount > 5) {
      lightsaber.style.boxShadow = '-1px -6px 41px 14px #00FF28'
    } else {
      lightsaber.style.boxShadow = ''
    }
    const scrollVh = (scrollAmount / window.innerHeight) * 100
    console.log(baseHeight, 'base')
    lightsaber.style.height = `${baseHeight + scrollVh}vh`
  }

  window.addEventListener('scroll', updateLightsaberHeight)
})
