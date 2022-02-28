const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")
const links = document.querySelectorAll("nav .menu ul a")


for (const element of toggle) {
   element.addEventListener('click', () => {
      nav.classList.toggle('show')
   })
}

for (const link of links) {
   link.addEventListener('click', () => {
      nav.classList.remove('show')
   })
}


const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
   if (window.scrollY>=navHeight) {
      header.classList.add("scroll")
   } else {
      header.classList.remove("scroll")
   }
})




// swiper carousel
const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   pagination: {
     el: '.swiper-pagination',
     type: 'bullets',
     clickable: true,
     bulletElement: 'span'
   },
   mousewheel: {
      invert: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
 });