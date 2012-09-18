<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script type="text/javascript"
      src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCBHqxmUp0o6FQLVDZzBqrkr2HIhk-j04A&sensor=false">
    </script>
    <script type="text/javascript">
      function initialize() 
      {        
	    // This defines the default options for the map        
        var myLatlng = new google.maps.LatLng(53.345168,-6.259289);
        var myOptions = {
          center: myLatlng, 
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
	// This assigns the map to div map_canvas and to the above default options        
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);
              
    </script>
    <script language="javascript" type="text/javascript" src="datetimepicker.js">
        </script>
  </head>
  
  <body onload="initialize()">
    
      <div class ="Basic_Grid">
    <div id="map_canvas"></div>
    <div id="choice_panel">
        <h1>Accident Details
        </h1>
        Severity of accident
        <form action="insert.php" method ="post">
        <input type="radio" name="severity" value="near_miss" /> Near Miss<br />    
        <input type="radio" name="severity" value="light" /> Light<br />
        <input type="radio" name="severity" value="moderate" /> Moderate<br />
        <input type="radio" name="severity" value="severe" /> Severe
        <br>
        <br>
        Type of Vehicles Involved:
        <br>
        <input type="radio" name="vehicle" value="car" /> Car<br />
        <input type="radio" name="vehicle" value="taxi" /> Taxi<br />
        <input type="radio" name="vehicle" value="bus" /> Bus<br />
        <input type="radio" name="vehicle" value="goods-vehicle" /> Goods Vehicle<br />
        <input type="radio" name="vehicle" value="motorbike" /> Motorbike<br />
        <input type="radio" name="vehicle" value="cyclist" /> Cyclist<br />
              
        <br>
        Time of Accident
        <br>
        <input type="text" name ="date" size="15"/>
    <a href="javascript:NewCal('demo1','ddmmyyyy', 'true')"> 
        <img src="images/cal.gif" width="16" height="16" border="0" alt="Pick a date"></a>
        <input type="submit"/>  
        </form> 
      </div>
    </div>
  </body>
</html>
