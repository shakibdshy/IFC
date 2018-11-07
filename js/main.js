$(document).ready(function(){
	//Tooltip
	$('[data-toggle="tooltip"]').tooltip();

    //open responsive menu
    $(".menu-responsive .open").click(function(){
        // $(this).parent().find(".opened").toggleClass("closed");
        $('.menu-responsive .open + .opened').slideToggle(200);
    });

    // Counter
	$('.stat-count').counterUp({
		delay: 10,
		time: 1000
	});

	// Video on Modal
	$('#myModal').on('shown.bs.modal', function () {
		$('#video1')[0].play();
	})
	$('#myModal').on('hidden.bs.modal', function () {
		$('#video1')[0].pause();
	})


	//Featured On Slide
	$('.featured-clients').owlCarousel({
		autoplay: true,
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:3
	        },
	        600:{
	            items:4,
	            nav:false
	        },
	        1000:{
	            items:6,
	            loop:false
	        }
	    }
	});

	//Featured On Slide
	$('.currently-scan-sites').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:3
	        },
	        600:{
	            items:4,
	            nav:false
	        },
	        1000:{
	            items:5,
	            loop:false
	        }
	    }
	});


	/*
        Scan partners activity Multipart Form
    */
    $('.scan-partners-activity fieldset:first-child').fadeIn('slow');
    
    $('.scan-partners-activity input[type="text"], .scan-partners-activity input[type="email"], .scan-partners-activity select').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    
    $('#searchType').on('change', function(){
    	var type = $(this).val();
    	if(type == 'tinder'){
    		$('.searchType').html('Step <span>2</span> of 5');
    	}else{
    		$('.searchType').html('Step <span>2</span> of 3');
    	}
    });
    
    
   	var fieldSets = '';
	var srcType = '';
   
    
    // next step
    $('.scan-partners-activity .btn-next').on('click', function() {
    	
    	if(srcType == undefined){
	    	var srcType = $('#searchType').val();
			if(srcType == 'tinder'){
				srcType = 'tinder';
				var last = $('.last');
				fieldSets = $('.tinder');
				$.merge(fieldSets,last);
			}else{
				srcType = 'all';
				fieldSets = $('.all');  
			}
    	}
 
    	var id = $(this).parents('fieldset').attr('id');
    	if(srcType == 'tinder'){
    		srcType = 'tinder';
			var last = $('.last');
			fieldSets = $('.tinder');
			$.merge(fieldSets,last);
    	}else{
    		srcType = 'all';
			fieldSets = $('.all');  
    	}
    	
    	
    	var idd = '';
 
    	fieldSets.each(function(i, v){
    		if($(v).attr('id') == id){
    			idd = i;
    		}
    	});
    	
    	var next = idd + 1;
    	var nxt =	fieldSets[next];
    	var next_step = true;
    	
    	$('#'+id).find('input[type="text"], input[type="number"] , input[type="email"]').each(function() {
    		console.log($(this).val());
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    	if( next_step ) {
    		$('#'+id).fadeOut(400, function() {
    			if(id > 2){
    				$('.final').html('Step <span>5</span> of 5');
    			}
    			$(nxt).fadeIn();
	    	});
    	}
    	
    });

    // submit
    $('.scan-partners-activity').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"]').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
	});
	
	//Blog On Slide
	$('.blog-slider-active').owlCarousel({
		autoplay: false,
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1,
			},
			768: {
				items: 2,
				margin: 30,
			},
			900: {
				items: 2,
				margin: 30,
			},
			1000: {
				items: 3,
			}
		}
	});

});