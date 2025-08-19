const navLinks=document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() => {
    //toggle mobile menu visibilty
 document.body.classList.toggle("show-mobile-menu");
});   
// close menu when the task is comlete
menuCloseButton.addEventListener("click",()=>menuOpenButton.click());
//close menu when the close button is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () =>menuOpenButton.click());
})
/*initilize swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //responsive bareakpoints
  breakpoints: {
    0:{
        slidesPreView: 1
    },
    768: {
        slidesPreView: 2
    },
    1024: {
        slidesPreView: 3
    }
  }
});*/
// Initialize Swiper
const swiper = new Swiper('.slider-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

