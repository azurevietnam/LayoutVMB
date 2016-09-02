$(document).ready(function() {
    $("#method_athome").click(function(){
        $(".methods-content").hide();
        $(".methods .active").removeClass("active");
        $(this).parent().addClass("active");
        $("#content_athome").show();
    })
    $("#method_office").click(function(){
        $(".methods-content").hide();
        $(".methods .active").removeClass("active");
        $(this).parent().addClass("active");
        $("#content_office").show();
    })
    $("#method_transfer").click(function(){
        $(".methods-content").hide();
        $(".methods .active").removeClass("active");
        $(this).parent().addClass("active");
        $("#content_transfer").show();
    })
    $("input:submit").click(function(){
        $(this).next('span[class="waiting"]').show('fast');
        $(this).hide();
    })
});
