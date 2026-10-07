import Swiper from "/node_modules/swiper/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  loop: false, 
  rewind: true,
  grabCursor: true,
  speed: 500,

  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: true,

  breakpoints: {
    1024: {
      slidesPerView: 3,      
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});