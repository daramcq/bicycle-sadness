    var count = 0;
    var myMarker;

  L.Event.addListener(map, 'click', function(latlng) 
  {         
     placeMarker(latlng, map);            
  }); 
  
map.on('click', onMapClick);

var popup = new L.Popup();

function onMapClick(e) {
    var latlngStr = '(' + e.latlng.lat.toFixed(3) + ', ' + e.latlng.lng.toFixed(3) + ')';

    popup.setLatLng(e.latlng);
    popup.setContent("You clicked the map at " + latlngStr);

    map.openPopup(popup);
}
  
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
        myMarker = new L.Marker(position, {draggable:true} );
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
