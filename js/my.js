$(function () {
    $(window).scroll(function() {
        var a = document.documentElement.scrollTop + document.body.scrollTop;
        if (a > 200) {
            $("#gotop").fadeIn(400);
        } else {
            $("#gotop").fadeOut(400);
        }
    });
    $("#gotop").click(function() {
        $("html,body").animate({scrollTop: "0px"}, 200)
    });
});