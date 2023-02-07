// Begin Map
function initMap() {
  const location = {lat: 39.93745077377082, lng: -75.02371407745103};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
// End Map

