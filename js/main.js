$(document).ready(function() {


    $('.menu-trigger').click(function() {
        $('.header').fadeIn();
        $('.header').addClass('active');
        $('body').addClass('inactive');
    });

    $('.closebtn').click(function() {
        $('.header').fadeOut();
        $('.header').removeClass('active');
        $('body').removeClass('inactive');
    });












});