$(document).ready(function() {


    $('.menu-trigger').click(function() {
        $('.header').fadeIn();
        $('.header').addClass('active');
        $('body').addClass('inactive');
    });

    $('.header').click(function() {
        $('.header').fadeOut();
        $('.header').removeClass('active');
        $('body').removeClass('inactive');
    });












});