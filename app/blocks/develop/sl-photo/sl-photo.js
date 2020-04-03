jQuery(document).ready(function ($) {
    $('.sl-photo').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.sl-photo__pagination').html('<span>' + i + '</span>' + '/' + slick.slideCount);
    });
    $('.sl-photo').slick({
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button><i class="icon-arrow-left"></i></button>',
        nextArrow: '<button><i class="icon-arrow-right"></i></button>',
        appendArrows: $('.rightside .slick-arrows'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true
            }
          },
        ]
      });
    });
    