$(document).ready(function () {
    var owl = $(".owl-carousel").owlCarousel({
      autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    $(".custom-next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".custom-prev").click(function () {
      owl.trigger("prev.owl.carousel");
    });
  });