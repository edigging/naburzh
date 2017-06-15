$(document).ready(function() {
    $.validator.addMethod("defaultInvalid", function(value, element)
    {
        return !(element.value == element.defaultValue);
    });
    /**
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
     **/
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




    $("#form").validate({

        rules: {
            name: {
                required:true,
                defaultInvalid: true,
                minlength:3
            },
            phone: {
                required:true,
                defaultInvalid: true,
                minlength:8
            },
            mail:{
                required: true,
                defaultInvalid: true,
                minlength:1
            },
        },
        messages: {
            name: {
                required: "Р’РІРµРґРёС‚Рµ РІР°С€Рµ РёРјСЏ.",
            },
            phone: {
                required: "Р’РІРµРґРёС‚Рµ РїСЂР°РІРёР»СЊРЅС‹Р№ РЅРѕРјРµСЂ.",
                minlength: "Р’РІРµРґРёС‚Рµ РїСЂР°РІРёР»СЊРЅС‹Р№ РЅРѕРјРµСЂ.",
            },
            mail: {
                required: "Р’РІРµРґРёС‚Рµ РІР°С€ Email.",
                minlength: "Р’РІРµРґРёС‚Рµ РІР°С€ Email.",
                mail: "РќРµРІРµСЂРЅРѕ Р·Р°РїРѕР»РЅРµРЅРѕ РїРѕР»Рµ.",
            },

        },
        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                url: 'mailer.php',
                data:  msg,
                success: function(data) {
                    $.fancybox.open('#success');
                },
                error:  function(xhr, str){
                    $.fancybox.open('#notsended');
                }
            });
            return false;
        }
    });

    $("#form2").validate({

        rules: {
            name: {
                required:true,
                defaultInvalid: true,
                minlength:3
            },
            phone: {
                required:true,
                defaultInvalid: true,
                minlength:8
            },
            mail:{
                required: true,
                defaultInvalid: true,
                minlength:1
            },
        },
        messages: {
            name: {
                required: "Р’РІРµРґРёС‚Рµ РІР°С€Рµ РёРјСЏ.",
            },
            phone: {
                required: "Р’РІРµРґРёС‚Рµ РїСЂР°РІРёР»СЊРЅС‹Р№ РЅРѕРјРµСЂ.",
                minlength: "Р’РІРµРґРёС‚Рµ РїСЂР°РІРёР»СЊРЅС‹Р№ РЅРѕРјРµСЂ.",
            },
            mail: {
                required: "Р’РІРµРґРёС‚Рµ РІР°С€ Email.",
                minlength: "Р’РІРµРґРёС‚Рµ РІР°С€ Email.",
                mail: "РќРµРІРµСЂРЅРѕ Р·Р°РїРѕР»РЅРµРЅРѕ РїРѕР»Рµ.",
            },

        },
        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                url: 'mailer.php',
                data:  msg,
                success: function(data) {
                    $.fancybox.open('#success');
                },
                error:  function(xhr, str){
                    $.fancybox.open('#notsended');
                }
            });
            return false;
        }
    });


    /**

     $('#form').submit(function(e) {
		e.preventDefault();
		var msg  = $(this).serialize();

		$.ajax({
			type: 'POST',
			url: 'mailer.php',
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

     **/

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