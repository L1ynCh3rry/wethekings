$(document).ready(function() {





    $('#gomusicbtn').click(function() {
        $('#main').css('margin-left', " -100vw");
    });

    $('#goblogbtn').click(function() {
        $('#main').css('margin-top', " -100vh");
    });

    $('#goleftbtn').click(function() {
        $('#main').removeClass('moveright');
    });

    $('#goupbtn').click(function() {
        $('#main').removeClass('movedown');
    });






});