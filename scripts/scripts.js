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
                required: "Введите ваше имя.",
            },
            phone: {
                required: "Введите правильный номер.",
                minlength: "Введите правильный номер.",
            },
            mail: {
                required: "Введите ваш Email.",
                minlength: "Введите ваш Email.",
                mail: "Неверно заполнено поле.",
            },

        },
        submitHandler: function(form) {
            var msg = $(form).serialize();

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
                required: "Введите ваше имя.",
            },
            phone: {
                required: "Введите правильный номер.",
                minlength: "Введите правильный номер.",
            },
            mail: {
                required: "Введите ваш Email.",
                minlength: "Введите ваш Email.",
                mail: "Неверно заполнено поле.",
            },

        },
        submitHandler: function(form) {
            var msg = $(form).serialize();

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

});