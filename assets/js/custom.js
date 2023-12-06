

// on ready function
jQuery(document).ready(function ($) {
  // header fix for Position fixed
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 150) {
      $("header").addClass("header-fixed animated fadeInDown");
    } else {
      $("header").removeClass("header-fixed animated fadeInDown");
    }
  });
});

// wow js
// wow = new WOW({
//   boxClass: "wow", // default
//   animateClass: "animated", // default
//   offset: 0, // default
//   mobile: true, // default
// });
// wow.init();

//slick slider
// $(".slick_slider").slick({
//   speed: 1000,
//   infinite: true,
//   arrows: false,
//   // prevArrow: (`<button class="btn btn-sm rounded-circle border prev-btn"><i class="fas fa-chevron-left"></i></button>`),
//   // nextArrow: (`<button class="btn btn-sm rounded-circle border next-btn"><i class="fas fa-chevron-right"></i></button>`),
//   dots: true,
//   autoplay: true,
//   gap:10,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 900,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     }
//   ],
// });

// data fn to show copyright year
document.getElementById("year").innerText = new Date().getFullYear();