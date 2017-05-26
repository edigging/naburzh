$(document).ready(function() {

	$('.clients .slider_wrap .slider').owlCarousel({
		autoPlay: true, 
		nav : true, 
		slideSpeed : 1300,
		smartSpeed : 1300,
		fluidSpeed : 1300,
		navSpeed : 1300,
		paginationSpeed : 1400,			     
		pagination:true,
		padding: 0,
		navText: "",
		autoHeight:true,
		items: 1
	});

	$('header ul li a').click(function(e) {

		e.preventDefault();
		var target = $(this).attr('href');

		$('body,html').animate({ scrollTop: $(target).offset().top },1000);

	});


	$('.top_screen .content a').click(function(e) {

		e.preventDefault();

		$('body,html').animate({ scrollTop: $('#footer').offset().top },1000);

	});


	$('.modal_open').click(function(e) {

		e.preventDefault();

		var target = $(this).attr('data-target');
		console.log(target);

		$.fancybox.open('#modal' , {
			beforeShow: function() {

				$('#modal #formsended').val(target);
			}
		} );
	});

	('#form').submit(function(e) {
		e.preventDefault();
		var msg  = $(this).serialize();

		$.ajax({
			type: 'GET',
			url: 'contact.php',
			data:  msg,
			success: function(data) {
				$.fancybox.open('#success');           
			},
			error:  function(xhr, str){
				$.fancybox.open('#notsended');
			}
		});

		return false;
	});



/*	


	


	$('#form').submit(function(e) {
		e.preventDefault();
		var msg  = $(this).serialize();

		$.ajax({
			type: 'GET',
			url: 'contact.php',
			data:  msg,
			success: function(data) {
				$.fancybox.open('#success');           
			},
			error:  function(xhr, str){
				$.fancybox.open('#notsended');
			}
		});

		return false;
	});

	*/	



});