
var cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/4a7ecbf54cd74519a944efa10e330c2e/997/256/{z}/{x}/{y}.png', {

    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',

    maxZoom: 18

});
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/4a7ecbf54cd74519a944efa10e330c2e/{styleId}/256/{z}/{x}/{y}.png',
cloudmadeAttribution = 'OutSpoken, Dublin, 2012',
cloudmadeOptions = {maxZoom: 18, attribution: cloudmadeAttribution};

var minimal = new L.TileLayer(cloudmadeUrl, cloudmadeOptions, {styleId: 22677}),
midnightCommander = new L.TileLayer(cloudmadeUrl, cloudmadeOptions, {styleId: 999});

var accidentsLayer = new L.LayerGroup();
var theftLayer = new L.LayerGroup();
var hazardLayer = new L.LayerGroup();

// Define the icons to be applied to the markers
var AccIcon = L.Icon.extend({
    iconUrl: 'dist/images/accident.png',
    shadowUrl: 'dist/images/marker-shadow.png',
    options : {
	iconSize: [30, 45],
	shadowSize: [30, 45],
	iconAnchor: [150, 44],
	shadowAnchor: [15, 44],
	popupAnchor: [15, -4] 
    }
    
    /*    iconSize: new L.Point(30, 45),
	  shadowSize: new L.Point(30, 55),
	  iconAnchor: new L.Point(22, 94),
	  popupAnchor: new L.Point(-3, -76) Deprecated, was giving the "jumping icons grief" */

}); 

//!! Missing the instance creation:

var accIcon = new AccIcon();

var HazIcon = L.Icon.extend({

    iconUrl: 'dist/images/generalhazard.png',
    shadowUrl: 'dist/images/marker-shadow.png',
    /*    iconSize: new L.Point(30, 45),
	  shadowSize: new L.Point(30, 55),
	  iconAnchor: new L.Point(22, 94),
	  popupAnchor: new L.Point(-3, -76) Deprecated, was giving the "jumping icons grief" */
});



//!! Missing the instance creation:

var hazIcon = new HazIcon();
var TheftIcon = L.Icon.extend({

    iconUrl: 'dist/images/clippers.png',
    shadowUrl: 'dist/images/marker-shadow.png',
    /*    iconSize: new L.Point(30, 45),
	  shadowSize: new L.Point(30, 55),
	  iconAnchor: new L.Point(22, 94),
	  popupAnchor: new L.Point(-3, -76) Deprecated, was giving the "jumping icons grief" */

});

//!! Missing the instance creation:

var theftIcon = new TheftIcon();

var map = new L.Map('map_canvas_large', {
    center: new L.LatLng(53.3649, -6.218),
    zoom: 12,
    layers: [minimal, accidentsLayer,theftLayer,hazardLayer]
});

    <!-- Adding the controls -->
var baseMaps = {
    "Minimal": minimal,
    "Night View": midnightCommander
}; 

var overlayMaps = {
    "Accidents": accidentsLayer,
    "Thefts": theftLayer,
    "Hazards": hazardLayer
};

var placeMarkers = function(data){
    var hazards = data.hazards;
    for (var i = 0; i < hazards.length; i++){
	var date = hazards[i].getAttribute("date");
	var time = hazards[i].getAttribute("time");
	var explanation = hazards[i].getAttribute("explanation");
	var point = new L.LatLng(
	    parseFloat(hazards[i].getAttribute("lat")),
	    parseFloat(hazards[i].getAttribute("lng")));
	var marker = new L.Marker(point, {icon: hazIcon});             
	hazardLayer.addLayer(marker);                                    
    }
};    

map.addLayer(hazardLayer);  

function doNothing(){}
