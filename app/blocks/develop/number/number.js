$('.number__more').click(function() {
    $(this).parent().find('.number__dif').addClass('number__dif_active');
    $(this).hide();
});
jQuery(document).ready(function ($) {
    $('.number__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.number__slider__pagination').html('<span>' + i + '</span>' + '/' + slick.slideCount);
    });
$('.number__slider').slick({
    slidesToShow: 1,
    // arrows: true,
    prevArrow: '<button><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button><i class="icon-arrow-right"></i></button>',
    appendArrows: $('.number__slider__nav .slick-arrows'),
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1199,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
        }
    }
    ]
  });
})