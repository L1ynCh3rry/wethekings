$(document).ready(function() {





    $('#gorightbtn').click(function() {
        $('#main').addClass('moveright');
    });

    $('#godownbtn').click(function() {
        $('#main').addClass('movedown');
    });

    $('#goleftbtn').click(function() {
        $('#main').removeClass('moveright');
    });

    $('#goupbtn').click(function() {
        $('#main').removeClass('movedown');
    });






});