jQuery(document).ready(function($) {
	$menu_btn = $('.menu-btn');
	$menu_close = $('.menu-close');
	$menu_btn.click(function(e){
		e.preventDefault();
		$(this).parents('.header').find('.header__menu').fadeToggle(100);
		$('body').toggleClass('noscroll');
	});
	$menu_close.click(function(e){
		e.preventDefault();
		$(this).parents('.header').find('.header__menu').fadeOut(100);
		$('body').removeClass('noscroll');
	});
	var
		$window = $(window),
		$target = $(".content"),
		$fixed = $target.offset().top;
		$window.on('scroll', function(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop > $fixed) {
				$('.header').addClass('header__fix');
				
			} else {
				$('.header').removeClass('header__fix');
				
			}
		});

	$('.search_btn').click(function() {
		$(this).parent().find('.header__search__wrap').toggleClass('header__search__wrap_active');
	})
});