    var count = 0;
    var myMarker;
  
map.on('click', function(e) {
   placeMarker(e.latlng, map);
});

var popup = function(e);

 
function placeMarker(position, map)
{
    if (count==1)
    {
        map.removeOverlay(myMarker);
        count = 0;
        placeMarker(position, map);
        
    }
    else
    {        
        myMarker = new L.Marker(position);
        map.addLayer(myMarker);
        getLocation(myMarker, map);
        count = 1;
        
        L.Event.addListener(myMarker, 'dragend', function() {
	    getLocation(myMarker,map);
	   
        });
    }
}
  
  
  function getLocation(myMarker, map)
  {
    var lat = myMarker.getLatLng().lat();
    var lng = myMarker.getLatLng().lng();
    
    document.getElementById("inc_lat").value=lat;
    document.getElementById("inc_lng").value=lng;  
  }
