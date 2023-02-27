$(document).ready(function(){
	$('.menu__button>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$('.menu__wrapper').css('top' ,"-100%");
			$('body,html').css("overflow-y" , "initial");
		} else {
			$(this).addClass("active");
			$('body,html').css("overflow-y" , "hidden");
			$('.menu__wrapper').css('top' ,"0px");
		}
	});


	$('.elem__faq').on('click' ,function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).find(".faq__content").slideUp(300);
			$(this).find(".faq__head img").attr("src" , "img/plus.svg");
		} else {
			$(this).addClass("active");
			$(this).find(".faq__content").slideDown(300);
			$(this).find(".faq__head img").attr("src" , "img/minus.svg");
		}
	});

	$('.hero__copy a').on('click' ,function(e){
		e.preventDefault();
		var $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val($(".hero__copy a").attr("data-copy")).select();
	    document.execCommand("copy");
	    $temp.remove();
	});


	$('.scrollable__link').on("click" ,function(e){
		e.preventDefault();
		let curr = $(this).attr("data-scroll");
		$('html').animate({ 
    	    scrollTop: $(curr).offset().top
        }, 900
        );
        if ($(window).width() < 991) {
        	$('.menu__button>a').removeClass("active");
			$('.menu__wrapper').css('top' ,"-100%");
			$('body,html').css("overflow-y" , "initial");
        }
	});
});