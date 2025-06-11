//==============================================//
// Swip
//==============================================//
var swiper = new Swiper('.swiper', {
  loop: true,

  // SP
  slidesPerView: 1,
  spaceBetween: 58,
  //PC
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3, // 3つずつスライドを送る
      spaceBetween: 40,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});