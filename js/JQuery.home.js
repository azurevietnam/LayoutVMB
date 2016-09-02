$(document).ready(function() {
    $('#frmFlightSearch')
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
            dep: {
                validators: {
                    notEmpty: {
                        message: 'Xin vui lòng nhập nơi đi'
                    },
					stringLength: {
                        min: 2,
                        message: 'Nhập ít nhất 2 ký tự'
                    }
                }
            },
            des: {
                validators: {
                    notEmpty: {
                        message: 'Xin vui lòng nhập nơi đến'
                    },
					stringLength: {
                        min: 2,
                        message: 'Nhập ít nhất 2 ký tự'
                    }
                }
            },
           
        }
    })
	
	}); 
	
$(document).ready(function(){
    if($(".rdbdirection:checked").val()==1){
        $("#retdate").attr("disabled","disabled");
		$(".swap-wrap .fa-long-arrow-left").css("opacity","0.6");
	}else{
        $("#retdate").removeAttr("disabled");
		$(".swap-wrap .fa-long-arrow-left").css("opacity","1");
	}

    $(".rdbdirection").click(function(){

        flighttype=$(this).val();
        if(flighttype==1){
            $("#retdate").attr("disabled","disabled");
			$(".swap-wrap .fa-long-arrow-left").css("opacity","0.6")
        }else{
            $("#retdate").removeAttr("disabled");
			$(".swap-wrap .fa-long-arrow-left").css("opacity","1")
        }
    })

    $.datepicker.setDefaults({
        inline: true,
        showOtherMonths: true,
        minDate:0,
        maxDate: "+1Y",
        dateFormat:"dd/mm/yy",
        monthNames: ['Tháng Một','Tháng Hai','Tháng Ba','Tháng Tư','Tháng Năm','Tháng Sáu','Tháng Bảy','Tháng Tám','Tháng Chín','Tháng Mười','T Mười Một','T Mười Hai'],
        dayNamesMin: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy'],
        numberOfMonths: 2,
        beforeShow:function(){
            $(".ui-datepicker").css("-moz-box-shadow","0px 0px 10px 0px rgba(0, 0, 0, .5)");
        }
    })
	//Show numberofMonth = 1 on mobile
	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
	};
	if(isMobile.any()) {
			 $.datepicker.setDefaults({
				numberOfMonths: 1,
			})
	
	}	
	 
    
    $("#depdate").datepicker({
		
	    onSelect: function( selectedDate) {
            if($(".rdbdirection:checked").val()=="0")
                $( "#retdate" ).datepicker( "option", "minDate", selectedDate );
        },
        onClose: function( selectedDate) {
            if($(".rdbdirection:checked").val()=="0")
                $( "#retdate" ).datepicker("show");
            return false;
            //console.log(selectedDate);
        }
    });
    $("#retdate").datepicker({
        beforeShow:function(){
            var deptime = $( "#depdate" ).val();
            if(deptime==""){
                $("#depdate").datepicker("show");
				
                return false;
            }else{
                $("#retdate").datepicker("option", "minDate",$("#depdate").val() );
				
            }
        }
    });

    $("#frmFlightSearch").submit(function(e){
         var deptime = $( "#depdate" ).val();
        if(deptime==""){
            $("#depdate").datepicker("show");
            return false;
        }
        else{
            if($(".rdbdirection:checked").val()=="0"){
                arvtime=$("#retdate").val();
                if(arvtime==""){
                    $("#retdate").datepicker("show");
                    return false;
                }
            }
        }
    return true;
    })
	 
});

$(document).ready(function() {
		
        //Owl Carousel
        var owlCarousel = $('#owl-carousel'),
            owlItems = owlCarousel.attr('data-items'),
            owlCarouselSlider = $('#owl-carousel-slider'),
            owlNav = owlCarouselSlider.attr('data-nav');
        // owlSliderPagination = owlCarouselSlider.attr('data-pagination');

        owlCarousel.owlCarousel({
            items: owlItems,
            navigation: true,
            navigationText: ['', '']
        });

        owlCarouselSlider.owlCarousel({
			autoPlay: 5000,
			slideSpeed : 2000,
			paginationSpeed: 400,
            // pagination: owlSliderPagination,
            singleItem: true,
            navigation: true,
            navigationText: ['', ''],
           transitionStyle : "fade"
        });
		
		
	    var owlslide = $("#owl-slide");
 	    owlslide.owlCarousel({
		loop: true,
		autoPlay: 5000,
		slideSpeed : 2000,
		items: 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1] ,
		navigation: true,
		pagination: false,
		navigationText: ['', ''],
		autoplayHoverPause: true,
		
	  });
	   	  var owlnews = $("#owl-news");
 	  	  owlnews.owlCarousel({
		  loop: true,
		  //autoPlay: 5000,
		  items: 1,
		  itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1] ,
		  vertical:true,
		  nav: true,
		  autoplayHoverPause: true,
		  animateOut: 'slideOutUp',
		  animateIn: 'slideInUp'
		
	  });
	    
		var owlbrand = $("#brand");
     	owlbrand.owlCarousel({
		pagination: false,
		autoPlay: 5000,
		items: 5,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,3],
		itemsMobile : [479,1] ,
		 
     });
     $(".slide-next").click(function() {
         owlbrand.trigger('owl.next');
     })
     $(".slide-prev").click(function() {
         owlbrand.trigger('owl.prev');
     })
	 
	var owlrelate = $("#owl-relate");
	owlrelate.owlCarousel({
	autoPlay: 5000, //Set AutoPlay to 3 seconds
	pagination:false,
	items : 3,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
	});
	  // Custom Navigation Events
	$(".next").click(function(){
	owlrelate.trigger('owl.next');
	})
	$(".prev").click(function(){
	owlrelate.trigger('owl.prev');
	})	
	
 });
 
 