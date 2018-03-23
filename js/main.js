$(document).ready(function() {




    /* GO TO THE MUSIC */
    $('#gomusicbtn').click(function() {
        $('#main').css('margin-left', " -100vw");
    });
    $('#gobackmusic').click(function() {
        $('#main').css('margin-left', "0");
    });



    /* GO TO THE BLOG*/
    $('#goblogbtn').click(function() {
        $('#main').css('margin-top', " -100vh");
    });
    $('#gobackblog').click(function() {
        $('#main').css('margin-top', " 0");
    });


    /* CHECK YOU PROFILE*/
    $('#goprofilebtn').click(function() {
        $('#myprofile').css('opacity', "1");
        $('#myprofile').css('z-index', "5");
    });
    $('#gobackprofile').click(function() {
        $('#myprofile').css('opacity', "0");
        $('#myprofile').css('z-index', "-1");
    });



    /******************CHOOSE MUSIC OR VIDEO**********************/

    /* MUSIC */
    $('#gosinglemusicbtn').click(function() {
        $('#singlemusic').css('opacity', "1");
        $('#singlemusic').css('z-index', "5");
        $('#main').css('margin-left', " -200vw");
    });
    $('#gobacksinglemusic').click(function() {
        $('#singlemusic').css('opacity', "0");
        $('#singlemusic').css('z-index', "-1");
        $('#main').css('margin-left', "-100vw");
    });
    /* VIDEO */
    $('#gosinglevideobtn').click(function() {
        $('#singlevideo').css('opacity', "1");
        $('#singlevideo').css('z-index', "5");
        $('#main').css('margin-left', "-200vw");
    });
    $('#gobacksinglevideo').click(function() {
        $('#singlevideo').css('opacity', "0");
        $('#singlevideo').css('z-index', "-1");
        $('#main').css('margin-left', "-100vw");
    });







});