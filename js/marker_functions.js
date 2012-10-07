   var markerCount = 0;
   var myMarker;

  map.on('click', function(e) {
      placeMarker(e.latlng,map);
    });

function placeMarker(position,map) {
      if (markerCount==1){
          map.removeLayer(myMarker);
          myMarker = new L.Marker(position, {draggable:true} );
          map.addLayer(myMarker);
          getLocation(myMarker, map);
          myMarker.on('dragend', function(){
	      getLocation(myMarker,map);
	  });
	}else{       
          myMarker = new L.Marker(position, {draggable:true} );
          map.addLayer(myMarker);
          getLocation(myMarker, map);
          markerCount = 1;
          myMarker.on('dragend', function(){
	      getLocation(myMarker,map);
	  });
	}
}


  function getLocation(myMarker, map){
    var lat = myMarker.getLatLng().lat; //same
    var lng = myMarker.getLatLng().lng; //same

    $("#inc_lat").val(lat);
    $("#inc_lng").val(lng); 
  }