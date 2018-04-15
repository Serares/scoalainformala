
function initMap() {
    var uluru = {lat: 44.4476387, lng: 26.0985161};
    var map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }