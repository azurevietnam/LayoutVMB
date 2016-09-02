"use strict";
 $('ul.slimmenu').slimmenu({
    resizeWidth: '992',
    collapserTitle: 'Main Menu',
    animSpeed: 250,
    indentChildren: true,
    childrenIndenter: ''
});

 
$('.btn').button();
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$('.form-group').each(function() {
    var self = $(this),
        input = self.find('input');

    input.focus(function() {
        self.addClass('form-group-focus');
    })

    input.blur(function() {
        if (input.val()) {
            self.addClass('form-group-filled');
        } else {
            self.removeClass('form-group-filled');
        }
        self.removeClass('form-group-focus');
    });
});
 


var airports = new Bloodhound({
 	
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name_vi', 'name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  identify: function(obj) { return obj.name_vi; },
  identify: function(obj) { return obj.name; },
  prefetch: 'http://baynhanh.xyz/demo/airports.json'
});
function nflTeamsWithDefaults(q, sync) {
  if (q === '') {
    sync(airports.get(''));
  }

  else {
    airports.search(q, sync);
  }
}

$('.typeahead-flights').typeahead({
  minLength: 0,
  highlight: true,
  limit: 22,
},
{
  name: 'airports',
  display: 'name_vi',
  limit: 22,
  source: nflTeamsWithDefaults
});
 
 
$(document).ready(function() {
 
	
    // footer always on bottom
    var docHeight = $(window).height();
   var footerHeight = $('#main-footer').height();
   var footerTop = $('#main-footer').position().top + footerHeight;
   
   if (footerTop < docHeight) {
    $('#main-footer').css('margin-top', (docHeight - footerTop) + 'px');
   }
    }


);


$('.nav-drop').dropit();


  

if ($('#map-canvas').length) {
    var map,
        service;

    jQuery(function($) {
        $(document).ready(function() {
            var latlng = new google.maps.LatLng(40.7564971, -73.9743277);
            var myOptions = {
                zoom: 16,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            };

            map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);


            var marker = new google.maps.Marker({
                position: latlng,
                map: map
            });
            marker.setMap(map);


            $('a[href="#google-map-tab"]').on('shown.bs.tab', function(e) {
                google.maps.event.trigger(map, 'resize');
                map.setCenter(latlng);
            });
        });
    });
}

 
// Lighbox gallery
$('#popup-gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a.popup-gallery-image',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// Lighbox image
$('.popup-image').magnificPopup({
    type: 'image'
});

// Lighbox text
$('.popup-text').magnificPopup({
    removalDelay: 500,
    closeBtnInside: true,
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});

// Lightbox iframe
$('.popup-iframe').magnificPopup({
    dispableOn: 700,
    type: 'iframe',
    removalDelay: 160,
    mainClass: 'mfp-fade',
    preloader: false
});


$('.form-group-select-plus').each(function() {
    var self = $(this),
        btnGroup = self.find('.btn-group').first(),
        select = self.find('select');
    btnGroup.children('label').last().click(function() {
        btnGroup.addClass('hidden');
        select.removeClass('hidden');
    });
});



var tid = setInterval(tagline_vertical_slide, 2500);

// vertical slide
function tagline_vertical_slide() {
    var curr = $("#tagline ul li.active");
    curr.removeClass("active").addClass("vs-out");
    setTimeout(function() {
        curr.removeClass("vs-out");
    }, 500);

    var nextTag = curr.next('li');
    if (!nextTag.length) {
        nextTag = $("#tagline ul li").first();
    }
    nextTag.addClass("active");
}

function abortTimer() { // to be called when you want to stop the timer
    clearInterval(tid);
}


$(function() {
	var $elem = $('.global-wrap');
	
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#nav_up').fadeIn('slow');    // Fade in the arrow
		} else {
			$('#nav_up').fadeOut(200);   // Else fade out the arrow
		}
	});  
	
	$(window).bind('scrollstart', function(){
		$('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
	});
	$(window).bind('scrollstop', function(){
		$('#nav_up,#nav_down').stop().animate({'opacity':'1'});
	});
	
	$('#nav_down').click(
		function (e) {
			$('html, body').animate({scrollTop: $elem.height()}, 800);
		}
	);
	$('#nav_up').click(
		function (e) {
			$('html, body').animate({scrollTop: '0px'}, 800);
		}
	);
});
 
//Start FAQ
$(document).ready(function() {
  $('.question').toggle(
                function () {
                    $(this).find('a').css({ 'font-weight': 'bold' });
                    $(this).find('span').addClass('viewing');
                    $(this).next().show();
                },
                function () {
                    $(this).find('a').css({ 'font-weight': 'normal' });
                    $(this).find('span').removeClass('viewing');
                    $(this).next().hide();
                }
            );
                var qParam = 'q';
            if (qParam != 'q') {
                $('.' + qParam).click();
                spoil('q');
            }
});
//End FAQ

//Start ContactForm
$(document).ready(function() {
    // Generate a simple captcha
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateCaptcha() {
        $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
    }

    generateCaptcha();

    $('#contactForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
			 err: {
				container: 'tooltip'
			},
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập họ tên'
                        }
                    }
                },
                
                
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                message: {
                    validators: {
                        notEmpty: {
                            message: 'The message is required'
                        },
                        stringLength: {
                            max: 700,
                            message: 'The message must be less than 700 characters long'
                        }
                    }
                },
                captcha: {
                    validators: {
                        callback: {
                            message: 'Wrong answer',
                            callback: function(value, validator, $field) {
                                var items = $('#captchaOperation').html().split(' '),
                                    sum   = parseInt(items[0]) + parseInt(items[2]);
                                return value == sum;
                            }
                        }
                    }
                }
            }
        })
        .on('err.form.fv', function(e) {
            // Regenerate the captcha
            generateCaptcha();
        });
});
//End contactForm