$(document).ready(function() {
    loadPopupBox();
    $('#popupBoxClose').click(function() {
        unloadPopupBox();
    });
    $('#container').click(function() {
        unloadPopupBox();
    });

    function unloadPopupBox() {
        $('#popup_box').fadeOut("slow");
        $("#container").css({
            "opacity": "1"
        });
    }

    function loadPopupBox() {
        $('#popup_box').fadeIn("slow");
        $("#container").css({
            "opacity": "0.3"
        });
    }
});