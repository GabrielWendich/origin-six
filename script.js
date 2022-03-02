// hidden menu
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


// header shadow
function scrollHeadedrShadow() {
   const header = document.querySelector("#header")
   const navHeight = header.offsetHeight

   if (window.scrollY>=navHeight) {
      header.classList.add("scroll")
   } else {
      header.classList.remove("scroll")
   }
}

// back to top button
function backToTop() {
   const backToTopButton = document.querySelector(".back-to-top")
   
   if (window.scrollY>=560) {
      backToTopButton.classList.add("show")
   } else {
      backToTopButton.classList.remove("show")
   }
}

// scroll
window.addEventListener('scroll', () => {
   scrollHeadedrShadow(),
   backToTop()
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



// scrollreveal
const scrollReveal = ScrollReveal({
   delay: 0,
   easing: 'cubic-bezier(0.5, 0, 0, 1)',
   interval: 0,
   opacity: 0,
   rotate: {
      x: 0,
      y: 0,
      z: 0,
   },
   origin: 'top',
   distance: '30px',
   duration: 700,
   reset: true,
})

scrollReveal.reveal(`
   #home .image, 
   #home .text,
   #about .image, 
   #about .text,
   #services header,
   #services .card,
   #testimonials header,
   #testimonials .testimonials,
   #contact .text,
   #contact .links
   `,
   { interval: 100 })

//  interval - interval between an iten and the next one