<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="style.css" />
    
        <title>View Cycling Accidents</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript"
      src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCBHqxmUp0o6FQLVDZzBqrkr2HIhk-j04A&sensor=false">
    </script>
    <script type="text/javascript">
      function initialize() 
      {        
	// This defines the default options for the map        
        var myOptions = {
          center: new google.maps.LatLng(53.345168,-6.259289),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
	// This assigns the map to div map_canvas and to the above default options        
        var map = new google.maps.Map(document.getElementById("output_canvas"),
            myOptions);
    
    var infoWindow = new google.maps.InfoWindow;

     
    function bindInfoWindow(marker, map, infoWindow, html) {
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });
    }

     
     downloadUrl("display2.php", function(data)
         {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName("marker");
            for (var i = 0; i < markers.length; i++)
            {
                var severity = markers[i].getAttribute("severity");
                var vehicle = markers[i].getAttribute("vehicle");
                var time = markers[i].getAttribute("time");
                var date = markers[i].getAttribute("date");
             //   var comment = markers[i].getAttribute("comment");
                var cause = markers[i].getAttribute("acc_cause");
                var point = new google.maps.LatLng(
                    parseFloat(markers[i].getAttribute("lat")),
                    parseFloat(markers[i].getAttribute("lng")));
                var html = "<b>Severity: " +severity+ "</b> <br>Vehicle: " + vehicle + "<br>Date: " + date+ "<br>Time: " +time +"<br>Cause: "+cause;                 
                var marker = new google.maps.Marker({
                    map: map,
                    position: point,
                   
                  });
                  bindInfoWindow(marker, map, infoWindow, html);
               }
            });  
     
     
      }
      function doNothing(){}
      
      
    </script>
     <script language="javascript" type="text/javascript">
     
        
     
     
     function downloadUrl(url,callback)
      {
        var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;
          
          request.onreadystatechange = function()
          {
            if (request.readyState == 4)
            {
                request.onreadystatechange = doNothing;
                callback(request, request.status);
            }
           };
           
           request.open('GET', url, true);
           request.send(null);
         }
         
      
        </script>
    <script language="javascript" type="text/javascript" src="datetimepicker.js">
        </script>
    </head>
    
    <body>
    <body onload="initialize()">
    <?php include 'header.php'; ?>
      <div class ="Basic_Grid">
    <div id="output_canvas"></div>
  
    </div>
    </body>
</html>
