//==============================================//
// Swiper
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

//==============================================//
// Accordion
//==============================================//
$(document).ready(function() {
    // 初期状態では全ての回答を非表示にする
    $(".q-and-a__accordion-qa .q-and-a__answer").hide();

    // 質問（dt）がクリックされたときの処理
    $(".q-and-a__accordion-qa .q-and-a__question").on("click", function() {
        // クリックされた質問の次の要素（回答: dd）をスライドで表示・非表示を切り替える
        $(this).next(".q-and-a__answer").slideToggle("fast");

        // クリックされた質問に 'open' クラスをトグルで追加・削除する
        $(this).toggleClass("open");

        // 他の開いている質問があれば閉じる
        $(".q-and-a__accordion-qa .q-and-a__question").not(this).removeClass("open");
        $(".q-and-a__accordion-qa .q-and-a__answer").not($(this).next(".q-and-a__answer")).slideUp("fast");
    });
});