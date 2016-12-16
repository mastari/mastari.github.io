$( document ).ready(function() {
    var centerH = $(document).width()/3;
    console.log(centerH + " is the middle brake point");
    $('.center').css({
    "margin-left": centerH
    });
    var sWidth = $(document).width();
    var sHeight = $(document).height();
    console.log(sWidth + " HERE")
    $("#bar").css({
        "width": sWidth
    });
    $("#logo").css({
        "margin-right": sWidth/58
    });
    $("#navy li a").css({
        "padding-top": sWidth/64
    });
    $("#navy li a").css({
        "padding-right": sWidth/91.4285714
    });
    $("#navy li a").css({
        "padding-left": sWidth/91.4285714
    });
    $("#navy li a").css({
        "padding-bottom":  sHeight/3.1538462
    });
});

