const navBtn = document.querySelector('.header__nav-btn');
const navIcon = document.querySelector('.nav-icon');
const topInner = document.querySelector('.header__top-inner');
const menu = document.querySelector('.menu__list');



navBtn.addEventListener('click', ()=>{
    menu.classList.toggle('menu__list--active');
    navIcon.classList.toggle('nav-icon--active');
    // topInner.classList.toggle('header__top-inner--mobile');
    
});








const swiper = new Swiper(".swiper.swiper1",{
    pagination:{
        el:".swiper-pagination",
    },

    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
    effect:"fade",

    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
});


const swiper2 = new Swiper('.swiper.swiper2', {
    // Optional parameters
    
    // loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },

    slidesPerView: 1,
    spaceBetween: 24,

    breakpoints: {
        1340:{
            slidesPerView: 2,
        },

        1024:{
            slidesPerView: 1.5,
        }
      }
    
    
  });