$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var nav = $('.nav'),
			navFixed = 'nav_fixed',
			navWrap = $('.nav-wrap'),
			navWrapOpen = 'nav-wrap_open',
			ticketsBtn = $('.tickets-btn'),
			ticketsBtnClass = 'tickets-btn_mt';

	$(window).on('resize load scroll', function(event) {
		if(navWrap.offset().top <= $(window).scrollTop()){
			nav.addClass(navFixed);
			ticketsBtn.addClass(ticketsBtnClass);
		} else {
			nav.removeClass(navFixed);
			ticketsBtn.removeClass(ticketsBtnClass);
		}

		$('.nav__list a').each(function () {
				var scrollPos = $(document).scrollTop() + 70;
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

	});


	$('.catalog__item').click(function(event) {
		var status = $(this).find('.catalog__status'),
				text = $(this).find('.catalog__text'),
				items = $(this).siblings('.catalog__item');

		if($(this).hasClass('catalog__item_open')){
			status.removeClass('catalog__status_open');	
			text.removeClass('catalog__text_show');
			$(this).removeClass('catalog__item_open');
			items.removeClass('catalog__item_hide');
		} else{
			$('.catalog__item').removeClass('catalog__item_open').removeClass('catalog__item_hide');
			$('.catalog__status').removeClass('catalog__status_open');
			$('.catalog__text').removeClass('catalog__text_show');
			status.addClass('catalog__status_open');
			text.addClass('catalog__text_show');	
			$(this).addClass('catalog__item_open');
			items.addClass('catalog__item_hide');
		}
		
	});


	$(document).mouseup(function (e){
		var div = $(".catalog__item");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.removeClass('catalog__item_open').removeClass('catalog__item_hide');
			div.find('.catalog__status').removeClass('catalog__status_open');
			div.find('.catalog__text').removeClass('catalog__text_show');
		}
	});


	$('.gallery__item').click(function(event) {
		var status = $(this).find('.catalog__status');

		status.toggleClass('catalog__status_open');
	});



	$(".nav a[href^='#']").click(function(){
    var _href = $(this).attr("href"),
    		navHeight = 50;
    if($(window).width() > 1060){
    	navHeight = $('.nav__wrap').height();
    } 
    $("html, body").animate({scrollTop: $(_href).offset().top - navHeight + "px"}, 1500);
    return false;
	});

	function valueElementForm(nameElement, nameBlock) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find(nameBlock),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('input', 'input');
	valueElementForm('textarea', 'textarea');


	$('.input__wrap').on('keyup', function() {
		var input = $(this).parents('.input');
		if($(this).val() != ''){
			input.addClass('input_filling')
		} else {
			input.removeClass('input_filling')
		}
	});

	$('.textarea__wrap').on('keyup', function() {
		var input = $(this).parents('.textarea');
		if($(this).val() != ''){
			input.addClass('textarea_filling')
		} else {
			input.removeClass('textarea_filling')
		}
	});



	var hum = $('.hum'),
			humClass = 'hum_open',
			navus = $('.nav__wrap'),
			navusClass = 'nav__wrap_open',
			bgMobile = $('.bg-mobile'),
			bgMobileClass = 'bg-mobile_show';

	function ToggleNav(){
		hum.toggleClass(humClass);
		navus.toggleClass(navusClass);
		bgMobile.toggleClass(bgMobileClass);
	}

	hum.click(function(){
		ToggleNav();
	})

	bgMobile.click(function(){
		ToggleNav();
	})



	$('.nav__list a').click(function(event) {
		ToggleNav();
	});













	
});
