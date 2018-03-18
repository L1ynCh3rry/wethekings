$(document).ready(function() {


    $('.menu-trigger').click(function() {
        $('.header').addClass('active');
        $('body').addClass('inactive');
    });

    $('.closebtn').click(function() {
        $('.header').removeClass('active');
        $('body').removeClass('inactive');
    });


    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
    });



    $('#getintouchbtn').click(function() {
        $('#getintouch').addClass('ginactive');
        $('body').addClass('inactive');
    });

    $('#getintouchclosebtn').click(function() {
        $('#getintouch').removeClass('ginactive');
        $('body').removeClass('inactive');
    });





});