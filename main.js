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

// Begin Form

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#sub').value = "Submitting.";
   let data = new FormData(form);
   fetch('https://script.google.com/macros/s/AKfycbyDaQM-E376ckxcsTuisQSq2pitK3Ow1GQMHRT02HEhYt5VWHbs7U25H4PXzZf5nph_HQ/exec', {
    method: "POST",
    body: data
   })
   .then(res => res.text())
   .then(data => {
    document.querySelector('#msg').innerHTML = data;
    document.querySelector('#sub').value = "Submit";
   });
})

//End Form