    var count = 0;
    var myMarker;

  CM.Event.addListener(map, 'click', function(latlng) 
  {         
     placeMarker(latlng, map);            
  }); 
  
  
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
        myMarker = new CM.Marker(position, {draggable:true} );
        map.addOverlay(myMarker);
        getLocation(myMarker, map);
        count = 1;
        
        CM.Event.addListener(myMarker, 'dragend', function() {
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
