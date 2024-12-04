let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle("move")
    navbar.classList.toggle("open-menu")
};
// Swiper
var swiper = new Swiper(".services-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".blog-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    }
    
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
  var swiper = new Swiper(".banner-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    }
    
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
  //Header
  let header = document.querySelector('header')

  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  })