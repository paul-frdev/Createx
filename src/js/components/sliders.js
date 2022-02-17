


import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3,
    }
  }
});

const testimonialsSwiper = new Swiper('.swiper-testimonials', {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});

