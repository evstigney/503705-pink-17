/*---- интерактивная карта ----*/

var initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 59.936271, lng: 30.321076},
    disableDefaultUI: true,
  });

  var marker = new google.maps.Marker ({
    position: {lat: 59.935835, lng: 30.321055},
    icon: 'img/icon-map-marker.svg',
    map: map
  });
};
