// Carousel
$(document).ready(function () {
  $(".carousel1").owlCarousel({
    loop: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 40,
    responsiveClass: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// Carousel 2
$(document).ready(function () {
  $(".carousel2").owlCarousel({
    loop: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    nav: true,
    autoplayTimeout: 4000,
    autoplay: true,
    margin: 40,
    responsiveClass: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
