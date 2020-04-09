jQuery(document).ready(function ($) {
    $('.reviews__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.reviews__pagination').html('<span>' + i + '</span>' + '/' + slick.slideCount);
    });
    $('.reviews__slider').slick({
        slidesToShow: 1,
        // arrows: true,
        prevArrow: '<button class="slick-prev"><i class="icon-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="icon-arrow-right"></i></button>',
        appendArrows: $('.reviews .slick-arrows'),
        fade: true,
  cssEase: 'linear',
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
      jQuery('.reviews__slider .slick-next').on('click', function(){
        jQuery('.reviews__slider').slick("slickNext");
    });
      jQuery('.reviews__slider .slick-prev').on('click', function(){
        jQuery('.reviews__slider').slick("slickPrev");
    });
    });


    