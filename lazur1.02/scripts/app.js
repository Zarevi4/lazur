(function () {
  var app = document.querySelector('.app');
  app.classList.remove('app_no_js');
  app.classList.add('app_js');
})();
jQuery(document).ready(function ($) {
  $menu_btn = $('.menu-btn');
  $menu_close = $('.menu-close');
  $menu_btn.click(function (e) {
    e.preventDefault();
    $(this).parents('.header').find('.header__menu').fadeToggle(100);
    $('body').toggleClass('noscroll');
  });
  $menu_close.click(function (e) {
    e.preventDefault();
    $(this).parents('.header').find('.header__menu').fadeOut(100);
    $('body').removeClass('noscroll');
  });
  var $window = $(window),
      $target = $(".content"),
      $fixed = $target.offset().top;
  $window.on('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > $fixed) {
      $('.header').addClass('header__fix');
    } else {
      $('.header').removeClass('header__fix');
    }
  });
});
var date = new Date();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var ex = tomorrow.toLocaleDateString();
var endInput = document.getElementsByClassName('end')[0].placeholder = ex;
var start = datepicker('.start', {
  id: 1,
  startDay: 1,
  customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  customDays: ['Вос', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  overlayButton: "Выбрать",
  overlayPlaceholder: '4-значный год',
  minDate: date,
  disableYearOverlay: true,
  formatter: function formatter(input, date, instance) {
    var value = date.toLocaleDateString();
    input.value = value; // => '1/1/2099'
  },
  onSelect: function onSelect(instance) {
    // Show which date was selected.
    console.log(instance.dateSelected);
  }
});
var end = datepicker('.end', {
  id: 1,
  startDay: 1,
  customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  overlayButton: "Выбрать",
  overlayPlaceholder: '4-значный год',
  minDate: date,
  disableYearOverlay: true,
  formatter: function formatter(input, date, instance) {
    var value = date.toLocaleDateString();
    input.value = value; // => '1/1/2099'
  }
});
start.setDate(new Date());
jQuery(document).ready(function ($) {
  $('.sl-leftside').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
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
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
});
$('.news__slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object

  }]
});
var myMap;
ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса

function init() {
  myMap = new ymaps.Map("map", {
    preset: 'twirl#redIcon',
    Placemark: [43.551605, 39.777347],
    center: [43.551605, 39.777347],
    // Координаты центра карты
    zoom: 17,
    // Zoom
    controls: []
  });
  myMap.behaviors.disable('scrollZoom');
  var myPlacemark = new ymaps.Placemark([43.551605, 39.777347], {}, {
    preset: 'twirl#invertedLightblueClusterIcons'
  });
  myMap.geoObjects.add(myPlacemark);
}
jQuery(document).ready(function ($) {
  $('.numbers__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.numbers__slider__pagination').html('<span>' + i + '</span>' + '/' + slick.slideCount);
  });
  $('.numbers__slider').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button><i class="icon-arrow-right"></i></button>',
    appendArrows: $('.numbers__image_slider .slick-arrows'),
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });
});
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$('.number__more').click(function () {
  $(this).parent().find('.number__dif').addClass('number__dif_active');
  $(this).hide();
});
jQuery(document).ready(function ($) {
  var _$$slick;

  $('.number__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.number__slider__pagination').html('<span>' + i + '</span>' + '/' + slick.slideCount);
  });
  $('.number__slider').slick((_$$slick = {
    slidesToShow: 1,
    // arrows: true,
    prevArrow: '<button><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button><i class="icon-arrow-right"></i></button>',
    appendArrows: $('.number__slider__nav .slick-arrows')
  }, _defineProperty(_$$slick, "slidesToShow", 3), _defineProperty(_$$slick, "slidesToScroll", 1), _defineProperty(_$$slick, "responsive", [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }]), _$$slick));
});
jQuery(document).ready(function ($) {
  $('.sl-photo').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
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
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
});
jQuery(document).ready(function ($) {
  $('.sl-rightside').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.sl-rightside__pagination').html('<span>' + i + '</span>' + '/' + slick.slideCount);
  });
  $('.sl-rightside').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button><i class="icon-arrow-right"></i></button>',
    appendArrows: $('.rightside .slick-arrows'),
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
});
jQuery(document).ready(function ($) {
  $('.reviews__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
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
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
  jQuery('.reviews__slider .slick-next').on('click', function () {
    jQuery('.reviews__slider').slick("slickNext");
  });
  jQuery('.reviews__slider .slick-prev').on('click', function () {
    jQuery('.reviews__slider').slick("slickPrev");
  });
});
//# sourceMappingURL=app.js.map