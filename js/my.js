$(function () {
    $(window).scroll(function() {
        var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (top > 200) {
            $("#gotop").fadeIn(400);
        } else {
            $("#gotop").fadeOut(400);
        }
    });
    $("#gotop").click(function() {
        $("body").animate({scrollTop: "0px"}, 200)
    });
});