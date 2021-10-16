$(document).ready(function () {
    ancho= $(window).width();
    $(document).on(function () {
        if(ancho => 992){
            $('.header-body.header').css('display','none');
        }
    });
});