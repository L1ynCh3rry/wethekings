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
        $('#getintouch').addClass('z-index');
        $('#overlay').addClass('overlayactive');
        $('body').addClass('inactive');
    });
    $('#getintouchclosebtn').click(function() {
        $('#getintouch').removeClass('ginactive');
        $('#overlay').removeClass('overlayactive');
        setTimeout(
            function() {
                $('#getintouch').removeClass('z-index');
            }, 800);
        $('body').removeClass('inactive');
    });



    $('#getintouchbtn2').click(function() {
        $('#getintouch').addClass('ginactive');
        $('#getintouch').addClass('z-index');
        $('#overlay').addClass('overlayactive');
        $('body').addClass('inactive');
    });
    $('#getintouchclosebtn').click(function() {
        $('#getintouch').removeClass('ginactive');
        $('#overlay').removeClass('overlayactive');
        setTimeout(
            function() {
                $('#getintouch').removeClass('z-index');
            }, 800);
        $('body').removeClass('inactive');
    });



    $('#getintouchbtn3').click(function() {
        $('#getintouch').addClass('ginactive');
        $('#getintouch').addClass('z-index');
        $('#overlay').addClass('overlayactive');
        $('body').addClass('inactive');
    });
    $('#getintouchclosebtn').click(function() {
        $('#getintouch').removeClass('ginactive');
        $('#overlay').removeClass('overlayactive');
        setTimeout(
            function() {
                $('#getintouch').removeClass('z-index');
            }, 800);
        $('body').removeClass('inactive');
    });




    $('#getintouchbtn4').click(function() {
        $('#getintouch').addClass('ginactive');
        $('#getintouch').addClass('z-index');
        $('#overlay').addClass('overlayactive');
        $('body').addClass('inactive');
    });
    $('#getintouchclosebtn').click(function() {
        $('#getintouch').removeClass('ginactive');
        $('#overlay').removeClass('overlayactive');
        setTimeout(
            function() {
                $('#getintouch').removeClass('z-index');
            }, 800);
        $('body').removeClass('inactive');
    });



    /* BUY A DOG*/
    $('#buyadogbtn').click(function() {
        $('#buyadog').addClass('ginactive');
        $('#buyadog').addClass('z-index');
        $('#overlay').addClass('overlayactive');
        $('body').addClass('inactive');
    });
    $('#buyadogclosebtn').click(function() {
        $('#buyadog').removeClass('ginactive');
        $('#overlay').removeClass('overlayactive');
        setTimeout(
            function() {
                $('#buyadog').removeClass('z-index');
            }, 800);
        $('body').removeClass('inactive');
    });





});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(44.431578, 20.877643), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#f7f6d2" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map " seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(44.431578, 20.877643),
        map: map,
        title: 'Snazzy!'
    });
}