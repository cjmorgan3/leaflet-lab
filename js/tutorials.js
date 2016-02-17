// Creates variable and sets it equal to a map that was just created in the given div. Also sets default extent and zoom level
var tutorialmap = L.map('tutorialmap').setView([51.505, -0.09], 13);

//adds tile layer from web and sets parameters, adding it to the map
var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(tutorialmap);

//creates a marker, sets it coordinates, and adds it to the map
var marker = L.marker([51.5, -0.09]).addTo(tutorialmap);

//creates a circle, sets its parameters, and adds it to the map
var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(tutorialmap);

//creates a polygon, sets its corners, and adds it to the map
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(tutorialmap);

//creates popups and corresponding messages for the previously created symbols
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

//creates a standalone popup, sets its coordinates and message, and adds it to the map
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(tutorialmap);

//creates a map click function that returns the coordinates of wherever the user clicks, adds it to the map in the form of a popup
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(tutorialmap);
}

//calls the onMapClick function
tutorialmap.on('click', onMapClick);

// //own addition using GeoJSON
// function onEachFeature(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties && feature.properties.popupContent) {
//         layer.bindPopup(feature.properties.popupContent);
//     }
// }

// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Buckingham Palace",
//         "amenity": "Royal Residence",
//         "popupContent": "This is where the corgies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [51.501112, -0.142302]
//     }
// };

// L.geoJson(geojsonFeature, {
//     onEachFeature: onEachFeature
// }).addTo(tutorialmap);