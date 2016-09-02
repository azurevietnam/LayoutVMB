$(document).ready(function() {
    $('#frmwgSearch')
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
			 wgdepdate: {
				validators: {
					notEmpty: {
						message: 'The start date is required'
					},
					date: {
						format: 'dd/mm/yy',
						max: 'wgretdate',
						message: 'The start date is not a valid'
					}
				}
			},
			wgretdate: {
				validators: {
					notEmpty: {
						message: 'The end date is required'
					},
					date: {
						format: 'dd/mm/yy',
						min: 'wgdepdate',
						message: 'The end date is not a valid'
					}
				}
			}
           
        }
    })
   
	}); 

$(document).ready(function(){

    if($(".wgdirection:checked").val()==1)
        $("#wgretdate").attr("disabled","disabled");
    else
        $("#wgretdate").removeAttr("disabled");

    $(".wgdirection").click(function(){
        flighttype=$(this).val();
        if(flighttype==1){
            $("#wgretdate").attr("disabled","disabled");
        }else{
            $("#wgretdate").removeAttr("disabled");
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
        numberOfMonths: 1,
        beforeShow:function(){
            $(".ui-datepicker").css("-moz-box-shadow","0px 0px 10px 0px rgba(0, 0, 0, .5)");
        }
    })

    $("#wgdepdate").datepicker({
        onSelect: function( selectedDate) {
            if($(".wgdirection:checked").val()=="0")
                $( "#wgretdate" ).datepicker( "option", "minDate", selectedDate );
        },
        onClose: function( selectedDate) {
            if($(".wgdirection:checked").val()=="0")
                $( "#wgretdate" ).datepicker("show");
            return false;
            //console.log(selectedDate);
        }
    });

    $("#wgretdate").datepicker({
        beforeShow:function(){
            var deptime = $( "#wgdepdate" ).val();
            if(deptime==""){
                $("#wgdepdate").datepicker("show");
                return false;
            }else{
                $("#wgretdate").datepicker("option", "minDate",$("#wgdepdate").val() );
            }
        }
    });

    $("#wgsform form").submit(function(e){
        //e.preventDefault();
        var deptime = $( "#wgdepdate" ).val();
        if(deptime==""){
            $("#wgdepdate").datepicker("show");
            return false;
        }

        if($(".wgdirection:checked").val()==0){
            arvtime=$("#wgretdate").val();
            if(arvtime==""){
                $("#wgretdate").datepicker("show");
                return false;
            }
        }
 
        return true;
    })


});
