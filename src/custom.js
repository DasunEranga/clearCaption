$(document).ready(function() {

    function equalHeightContainers($container) {
        // Cache the highest
        var highestBox = 0;

        // Select and loop the elements you want to equalise
        $($container).each(function() {

            // If this box is higher than the cached highest then store it
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });

        // Set the height of all those children to whichever was highest
        $($container).height(highestBox);
    }

    equalHeightContainers('.services-wrapper .content');

    //form validation and submit
    //CONTACT FORM: ajax request
    $('.contactSubmit').click(function() {
        //FORM VALIDATION: validates on submit
        $(".contact-form").validate({
            rules: {
                firstName: {
                    required: true,
                    minlength: 5,
                },
                lastName: {
                    required: true,
                    minlength: 5,
                },
                emailAddress: {
                    required: true,
                    email: true
                },
                phoneNumber: {
                    required: true,
                    number: true
                }
                // ,
                // message: {
                //     required: true,
                //     minlength: 50
                // }
            },
            messages: { //messages to appear on error
                firstName: {
                    required: "Please put your first Name.",
                    minlength: "C'mon first Name please."
                },
                lastName: {
                    required: "Please put your first Name.",
                    minlength: "C'mon first Name please."
                },
                email: "Enter a valid email.",
                phoneNumber: "Enter a valid phone Number.",

            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    url: "/api/sforce",
                    type: "post",
                    success: function() {
                        alert('Thank you for contacting us.');
                        $('.sign-me-up-form').toggle('slide');
                        $("body").toggleClass("sign-up-open");
                    }
                });
            }
        });
    });

    //CONTACT FORM: ajax request
    $('.supportSubmit').click(function() {
        //FORM VALIDATION: validates on submit
        $(".support-form").validate({
            rules: {
                firstName: {
                    required: true,
                    minlength: 5,
                },
                lastName: {
                    required: true,
                    minlength: 5,
                },
                emailAddress: {
                    required: true,
                    email: true
                },
                phoneNumber: {
                    required: true,
                    number: true
                }
                // ,
                // message: {
                //     required: true,
                //     minlength: 50
                // }
            },
            messages: { //messages to appear on error
                firstName: {
                    required: "Please put your first Name.",
                    minlength: "C'mon first Name please."
                },
                lastName: {
                    required: "Please put your first Name.",
                    minlength: "C'mon first Name please."
                },
                email: "Enter a valid email.",
                phoneNumber: "Enter a valid phone Number.",

            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    url: "/api/sforce",
                    type: "post",
                    success: function() {
                        alert('Your request has been successfully sent. We will contact you very soon!');
                        $('.sign-me-up-form').toggle('slide');
                        $("body").toggleClass("sign-up-open");
                    }
                });
            }
        });
    });
    //CONTACT FORM: ajax request
    $('.contactusSubmit').click(function() {
        //FORM VALIDATION: validates on submit
        $(".contact-form").validate({
            rules: {
                firstName: {
                    required: true,
                    minlength: 5,
                },
                lastName: {
                    required: true,
                    minlength: 5,
                },
                message: {
                    required: true,
                    minlength: 5,
                },
                department: {
                    required: true,
                    minlength: 5,
                },
                emailAddress: {
                    required: true,
                    email: true
                },
                phoneNumber: {
                    required: true,
                    number: true
                },
                hiddenRecaptcha: {
                    required: function() {
                        if (grecaptcha.getResponse() == '') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
                // ,
                // message: {
                //     required: true,
                //     minlength: 50
                // }
            },
            messages: { //messages to appear on error
                firstName: {
                    required: "Please put your first Name.",
                    minlength: "C'mon first Name please."
                },
                lastName: {
                    required: "Please put your first Name.",
                    minlength: "C'mon first Name please."
                },
                email: "Enter a valid email.",
                phoneNumber: "Enter a valid phone Number.",

            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    url: "/api/sforce",
                    type: "post",
                    success: function() {
                        alert('Thank you for contacting us.');
                        $('.sign-me-up-form').toggle('slide');
                        $("body").toggleClass("sign-up-open");
                    }
                });
            }
        });
    });

    //Talk to a ClearCaptions Consultant Form
    $('.consultantSubmit').click(function() {
        //FORM VALIDATION: validates on submit
        $(".consultant-form").validate({
            rules: {
                firstName: {
                    required: true,
                    minlength: 5,
                },
                lastName: {
                    required: true,
                    minlength: 5,
                },
                emailAddress: {
                    required: true,
                    email: true
                },
                phoneNumber: {
                    required: true,
                    number: true
                }
                // ,
                // message: {
                //     required: true,
                //     minlength: 50
                // }
            },
            messages: { //messages to appear on error
                firstName: {
                    required: "Please put your first Name.",
                    minlength: "C'mon first Name please."
                },
                lastName: {
                    required: "Please put your first Name.",
                    minlength: "C'mon first Name please."
                },
                email: "Enter a valid email.",
                phoneNumber: "Enter a valid phone Number.",

            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    url: "/api/sforce",
                    type: "post",
                    success: function() {
                        alert('Thank you for your request. We will contact you very soon!');
                        // $('#contact-form').hide();
                        // $('#sent').show();
                    }
                });
            }
        });
    });


    //Request a Demo Form
    $('.requestSubmit').click(function() {
        //FORM VALIDATION: validates on submit
        $(".request-form").validate({
            rules: {
                firstName: {
                    required: true,
                    minlength: 5,
                },
                lastName: {
                    required: true,
                    minlength: 5,
                },
                emailAddress: {
                    required: true,
                    email: true
                },
                phoneNumber: {
                    required: true,
                    number: true
                }
                // ,
                // message: {
                //     required: true,
                //     minlength: 50
                // }
            },
            messages: { //messages to appear on error
                firstName: {
                    required: "Please fill your first Name.",
                    minlength: "C'mon first Name please."
                },
                lastName: {
                    required: "Please put your last Name.",
                    minlength: "C'mon last Name please."
                },
                email: "Enter a valid email.",
                phoneNumber: "Enter a valid phone Number.",

            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    url: "/api/sforce",
                    type: "post",
                    success: function() {
                        alert('Thank you for your request. We will contact you very soon!');
                        // $('#contact-form').hide();
                        // $('#sent').show();
                    }
                });
            }
        });
    });


    //current menu item highlight
    $(".dropdown-menu li a").on('click', function() {
        console.log($(this).parents(".dropdown"));
        $(this).parents(".dropdown").addClass("current-item");
    });

    //disbale mobile page main scrolling when menu is open
    $(".navbar-toggle").click(function() {
        $("body").toggleClass("menu-open");
    });

    //Sign me up
    $('.sign-me-up-box').click(function() {
        $('.sign-me-up-form').toggle('slide');
        $("body").toggleClass("sign-up-open");
    });

    $('.as-seen-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: false,
        autoplay: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                    padding: 0
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                    padding: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    padding: 0
                }
            }
        ]
    });

    // product page mobile equivalent of product animation
    $('.info-item-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });

    // product page mobile equivalent of product features section
    $('.product-feature-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });

    $('.stay-connected-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 600,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1440,
            settings: {
                arrows: true,
                dots: true
            }
        }]
    });


    $('.stay-connected-slider-mobile').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 600,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    $('.features-mobile-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 600,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.news-items-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 600,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.testimonials-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 600,
        //autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });


    //adding class to active panel in faq

    $('.faq-wrapper .tab-content .panel-heading a').click(function() {
        $('.faq-wrapper .tab-content .panel-heading').removeClass('selected-faq');
        $(this).parents('.panel-heading').addClass('selected-faq');
    });

    window.sr = ScrollReveal({
        distance: '0',
        delay: 500
    });
    sr.reveal('.info-item-wrapper.left .info-item', { duration: 1500 }, 400);
    sr.reveal('.info-item-wrapper.right .info-item', { duration: 1500 }, 400);

    // Google Map

    $('.how-it-work-sub-nav ul li a').click(function(event) {
        alert("jeel")
        var $this = $(this),
            $location = $this.data('location');
        event.preventDefault();
        $('html,body').animate({
                scrollTop: $("#" + $location).offset().top
            },
            'slow');
    });


});


$(window).load(function() {
    equalHeightContainers('.services-wrapper .content');
});


$(window).resize(function() {
    equalHeightContainers('.services-wrapper .content');
});