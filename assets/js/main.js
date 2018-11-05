$(document).ready(function(){
	
	//Slider On Slide
	$('.slider-active').owlCarousel({
		autoplay: true,
	    loop:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1,
	        },
	        1000:{
	            items:1,
	        }
	    }
	});
	//Blog On Slide
	$('.blog-slider-active').owlCarousel({
		autoplay: true,
		loop:true,
		margin: 30,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1,
	        },
	        1000:{
	            items:3,
	        }
	    }
	});


});