const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 1,
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  });

const swiper2 = new Swiper('.recommended-slider', {
// Optional parameters
loop: true,
slidesPerView: 1,
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 1,
      },
    },

// Navigation arrows
navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
},
});

const swiper3 = new Swiper('.food_drink-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
      },
      650: {
        slidesPerView: 1,
      },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.food_drink-button-next',
        prevEl: '.food_drink-button-prev',
    },
    });

const searchButton = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchButton.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open')
});