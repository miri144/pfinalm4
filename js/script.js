// Code for directions.php

	
/* This code is from https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map */
function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
  }
google.maps.event.addDomListener(window, 'load', initialize);	