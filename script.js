$( document ).ready(function() {
    var centerH = $(document).width()/3;
    console.log(centerH + " is the middle brake point");
    $('.center').css({
    "margin-left": centerH
    });
    var sWidth = $(document).width();
    console.log(sWidth + " HERE")
    $("#bar").css({
        "width": sWidth
    });
    $("#logo").css({
        "margin-right": sWidth/58
    });
});

