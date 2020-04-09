jQuery(document).ready(function ($) {
$('.sl-leftside').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $('.sl-leftside__pagination').html('<span>' + i + '</span>' + '/' + slick.slideCount);
});
$('.sl-leftside').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button><i class="icon-arrow-right"></i></button>',
    appendArrows: $('.leftside .slick-arrows'),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });
});
