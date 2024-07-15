const carousel = document.querySelector('#carousel')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const items = document.querySelectorAll('#carousel img')

let carouselWidth = carousel.offsetWidth

let activeIndex = 0

window.addEventListener('resize', () => {
   carouselWidth = carousel.offsetWidth
})

next.addEventListener('click', () => {
   if (activeIndex < items.length - 1) {
      activeIndex++
      items.forEach((item, index) => {
         item.style.transform = `translateX(-${carouselWidth * activeIndex}px)`
      })
   } else {
      activeIndex = 0
      items.forEach((item, index) => {
         item.style.transform = `translateX(0px)`
      })
   }
})

prev.addEventListener('click', () => {
   if (activeIndex > 0) {
      activeIndex--
      items.forEach((item, index) => {
         item.style.transform = `translateX(-${carouselWidth * activeIndex}px)`
      })
   } else {
      activeIndex = items.length - 1
      items.forEach((item, index) => {
         item.style.transform = `translateX(-${carouselWidth * activeIndex}px)`
      })
   }
})
