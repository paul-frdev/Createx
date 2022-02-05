import Swiper, { Navigation } from 'swiper';

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
const portSlider = document.querySelector('.portfolio-section__items');

const portfolioSlider = new Swiper(portSlider, {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      console.log('swip init');

      const activeSlide = portSlider.querySelector('.swiper-slide-active');
      console.log('swiper-slide-active');

      const nextActiveSlide = activeSlide.nextElementSibling;

      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    }
  }
});

portfolioSlider.on('slideChange', function () {
  console.log('slideChange');

  const activeSlide = portSlider.querySelector('.swiper-slide-next');
  console.log('swiper-slide-active');

  const nextActiveSlide = activeSlide.nextElementSibling;

  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(elem => {
    elem.classList.remove('slider-visible');
  })

  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  nextNextActiveSlide.classList.add('slider-visible');
});


