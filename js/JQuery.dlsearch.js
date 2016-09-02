
$(document).ready(function() {
    $('#frmDlSearch')
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
                        min: 3,
                        message: 'Nhập ít nhất 3 ký tự'
                    }
                }
            },
            des: {
                validators: {
                    notEmpty: {
                        message: 'Xin vui lòng nhập nơi đến'
                    },
					stringLength: {
                        min: 3,
                        message: 'Nhập ít nhất 3 ký tự'
                    }
                }
            },
           
        }
    })
   
	}); 

	
$(document).ready(function(){

    if($(".dldirection:checked").val()==1)
        $("#dlretdate").attr("disabled","disabled");
    else
        $("#dlretdate").removeAttr("disabled");

    $(".dldirection").click(function(){
        flighttype=$(this).val();
        if(flighttype==1){
            $("#dlretdate").attr("disabled","disabled");
        }else{
            $("#dlretdate").removeAttr("disabled");
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

    $("#dldepdate").datepicker({
        onSelect: function( selectedDate) {
            if($(".dldirection:checked").val()=="0")
                $( "#dlretdate" ).datepicker( "option", "minDate", selectedDate );
        },
        onClose: function( selectedDate) {
            if($(".dldirection:checked").val()=="0")
                $( "#dlretdate" ).datepicker("show");
            return false;
            //console.log(selectedDate);
        }
    });

    $("#dlretdate").datepicker({
        beforeShow:function(){
            var deptime = $( "#dldepdate" ).val();
            if(deptime==""){
                $("#dldepdate").datepicker("show");
                return false;
            }else{
                $("#dlretdate").datepicker("option", "minDate",$("#dldepdate").val() );
            }
        }
    });

	
	
    $("#dialog-search form").submit(function(e){
        //e.preventDefault();
        var deptime = $( "#dldepdate" ).val();
        if(deptime==""){
            $("#dldepdate").datepicker("show");
            return false;
        }

        if($(".dldirection:checked").val()==0){
            arvtime=$("#dlretdate").val();
            if(arvtime==""){
                $("#dlretdate").datepicker("show");
                return false;
            }
        }
 
        return true;
    })



});

