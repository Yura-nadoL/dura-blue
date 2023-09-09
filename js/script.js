
// scroll header ========================================================================================================================================================================================================================================================================================================================================================================================================================================================
window.addEventListener('scroll', function () {
   if (pageYOffset > 70) {
      document.querySelector('.header').classList.add('active-header')
   } else {
      document.querySelector('.header').classList.remove('active-header')
   }
})

// search ================================================================================================================================================================================================ 
const search = document.querySelector('.box-header__search.serch');
const bodyElement = document.querySelector('body');

search.addEventListener('click', function (e) {
   e.stopPropagation();
   search.classList.add('active-search');
})
bodyElement.addEventListener('click', function () {
   search.classList.remove('active-search');
});

// burger ================================================================================================================================================================================================ 
const burgerBtn = document.querySelector('.nav-body-header__burger');
const navEl = document.querySelector('.nav-body-header');
const overflow = document.querySelector('.nav-body-header__overflow');
const bodyHid = document.body;

if (burgerBtn && bodyHid) {
   burgerBtn.addEventListener('click', () => {
      navEl.classList.toggle('active-burger');
      bodyHid.classList.toggle('lock');
   })
}
if (burgerBtn && bodyHid) {
   overflow.addEventListener('click', () => {
      navEl.classList.remove('active-burger');
      bodyHid.classList.remove('lock');
   })
}

// gallery ================================================================================================================================================================================================
let gallery = document.getElementById('lightgallery');
lightGallery(gallery, {
   licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
   speed: 500,
   controls: true, // стрелки prev / next
   counter: true, // номерация порядок картинок
   download: true, // скачивание картинок

   // plugins lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom

   plugins: [lgAutoplay, lgFullscreen, lgThumbnail, lgZoom, lgRotate],
})

//  swiper ================================================================================================================================================================================================
const swiperSmall = new Swiper('.small-sliders-box__slider', {
   direction: 'horizontal',
   spaceBetween: 10,
   slidesPerView: 7,
   watchSlidesVisibility: true,

});

const swiper = new Swiper('.sliders-box__slider', {
   // Optional parameters
   direction: 'horizontal',
   // loop: true,
   spaceBetween: 15,
   thumbs: {
      swiper: swiperSmall,
   },

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

});



// scroll ================================================================================================================================================================================================
function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('show'); // дабавляется класс
      } else {
         change.target.classList.remove('show'); // дабавляется класс
      }
   });
}

let options = {
   threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.works__image.image-works, .comment__inner, .why__content, .image-pair__items'); // блок радительский

for (let elm of elements) {
   observer.observe(elm);
}

// reviews ================================================================================================================================================================================================
const allEl = document.querySelector('.buttons-box-panel__all');
const titleAllBtn = document.querySelector('.all-buttons__title');
const menuAll = document.querySelector('.box-all-buttons__list');

const sortEl = document.querySelector('.buttons-box-panel__sort');
const titleSortBtn = document.querySelector('.sort-buttons__title');
const menuSort = document.querySelector('.box-sort-buttons__list');


if (titleAllBtn) {
   titleAllBtn.addEventListener('click', () => {
      allEl.classList.toggle('active');
   })
   menuAll.querySelectorAll('.box-all-buttons__link').forEach(link => {
      link.addEventListener('click', () => {
         allEl.classList.remove('active');
      })
   })
}
if (titleSortBtn) {
   titleSortBtn.addEventListener('click', () => {
      sortEl.classList.toggle('active');
   })
   menuSort.querySelectorAll('.box-sort-buttons__link').forEach(link => {
      link.addEventListener('click', () => {
         sortEl.classList.remove('active')
      })
   })
}

// swiper sliders-reviews ================================================================================================================================================================================================
const swiperReviews = new Swiper('.sliders-reviews__slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 4.3,
   spaceBetween: 15,
   breakpoints: {
      300: {
         slidesPerView: 1,
      },

      767: {
         slidesPerView: 3,
      },

      950: {
         slidesPerView: 4,
      },
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },
});



