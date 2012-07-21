<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="style.css" />

	<!-- Google Map functions  -->
    <script type="text/javascript"
      src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCBHqxmUp0o6FQLVDZzBqrkr2HIhk-j04A&sensor=false">
    </script>
    <script type="text/javascript">
      var marker;
      var markerLoc;
      var lat;
      var lng;
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
         
         google.maps.event.addListener(map, 'click', function(event) 
         {         
            placeMarker(event.latLng, map);            
         });
      }
     
        // This is a sweet recursive marker place function that I robbed from Stack Overflow
        function placeMarker(position, map)
        { 
            if (marker)
            {
                marker.setMap(null);
                marker= null;
                placeMarker(position, map);
            }
            else
            {
                marker = new google.maps.Marker(
                {
                    position: position,
                    map: map,
                    draggable: true
                });         
              map.panTo(position);   

           
             // This creates a listener to update the lat and long variables 
             // when the marker is moved and update these in the form 
             google.maps.event.addListener(marker, 'dragend', function(e) 
			  {
                    lat = marker.getPosition().lat();
                    lng = marker.getPosition().lng(); 
           
                    document.getElementById("inc_lat").value=lat;
                    document.getElementById("inc_lng").value=lng;
              }); 
              
              // This will apply marker position lat and long to my lat and 
              // lng variables
              lat = marker.getPosition().lat();
              lng = marker.getPosition().lng(); 
           
              // After that, we set those variables to apply where 'inc_lat 
              // and 'inc_lng' appear, i.e. in the HTML Form below
              document.getElementById("inc_lat").value=lat;
              document.getElementById("inc_lng").value=lng;
                       
            }
        };
               
    </script>
    
    <!-- Validation Functions   -->
    <script type="text/javascript">
    function validateForm()
    {
       var loc=document.forms["acc_info"]["current_lat"].value;              
       var loc_resp = "";
        
       var date=document.forms["acc_info"]["date"].value;
       var date_resp="";
       
       var sev_resp = "";
       var vehicle_resp="";
       
       if (loc==""||date==""||!checkRadio("acc_info","severity")||!checkRadio("acc_info","vehicle"))
       {
        
            if (loc=="")
            {
                loc_resp = "\n- Location";
            }
            
            if (date=="")
                date_resp="\n- Date";
                       
            if (!checkRadio("acc_info","severity"))
                sev_resp="\n- Severity";            
       
            if (!checkRadio("acc_info","vehicle"))
                vehicle_resp="\n- Vehicle Involved";
                      
            alert("The report is not complete, please enter the Incident's: " + loc_resp + sev_resp + vehicle_resp + date_resp);                       
            return false;          
        }
        return true;
    }
     // http://quomon.com/question-Radio-button-validation-2405.aspx
     function checkRadio (frmName, rbGroupName) 
     {
        var radios = document[frmName].elements[rbGroupName];
        for (var i=0; i <radios.length; i++) 
        {
            if (radios[i].checked) 
            {
                return true;
            }
        }
        return false;
     }
    </script>
         <!-- The datepicker scripts -->   
		<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
		<script src="js/timepicker.js" type="text/javascript"></script>
		<link type="text/css" rel="stylesheet" href="css/redmond/jquery-ui-1.8.18.custom.css"  />
		
		    	
	<!-- ptTimeSelect files below -->
	<link rel="stylesheet" type="text/css" href="js/jquery.ptTimeSelect.css" media="screen" />
	<script type="text/javascript" language="JavaScript" src="js/jquery.ptTimeSelect.js"></script>
		
  </head>
  <?php include "header.php"; ?>
  <body onload="initialize()">
    
      <div class ="Basic_Grid">
    <div id="map_canvas"></div>
    <div id="choice_panel">
        <h1>Accident Details
        </h1>
        <form name ="acc_info" action="insert.php" onsubmit="return validateForm();" method ="post">
        <input type = "hidden" name ="current_lat" id="inc_lat" value="" />
        <input type = "hidden" name ="current_lng" id="inc_lng" value=""/> 
        Severity of accident
        <br>                        
        <input type="radio" name="severity" value="near_miss" />Near-Miss<br />    
        <input type="radio" name="severity" value="light" />Light<br />
        <input type="radio" name="severity" value="moderate" />Moderate<br />
        <input type="radio" name="severity" value="severe" />Severe
        <br>
        <br>
        Type of Vehicles Involved:
        <br>
        <input type="radio" name="vehicle" value="car" /> Car<br />
        <input type="radio" name="vehicle" value="taxi" /> Taxi<br />
        <input type="radio" name="vehicle" value="bus" /> Bus<br />
        <input type="radio" name="vehicle" value="truck" /> Truck<br />
        <input type="radio" name="vehicle" value="motorbike" /> Motorbike<br />
        <input type="radio" name="vehicle" value="cyclist" /> Cyclist<br />
              
        <br>
        Date of Accident
        <br>
        <input id="date" type="text" name="date" autocomplete="off" value="">
  <script type="text/javascript" src ="js/datepicker.js">
      </script>
      <br>
      Time of Accident
      <div id="sample1">
 [<a href="javascript: void(0);" onclick="javascript:$('#sample1 code').toggle('slow');">view source</a>]
							<code>

$('#sample1 input').ptTimeSelect();


</code>

							<form onsubmit="javascript: void(0);">
								<div>Start: <input name="s1Time2" value="" /><br /></div>
								<div>
									End: <input name="s1Time2" value="" />
									<select>
										<option>Option 1 here</option>
										<option>Options 2 here</option>
									</select><br /> <br />
									<select>
										<option>Option 1 here</option>
										<option>Options 2 here</option>
									</select>
								</div>
							</form>
							<br /><br />
						</div>
        <br>
        What Happened?
        <textarea name="comment" autocomplete="off" cols="31" rows="5"></textarea>
        <br>
        <br>
        <input type="submit" value="Submit" onsubmit="/">  
        </form>
      </div>
      </div>
      <div id = "help_bar">
       <table border="0" margin="10px">
        <tr>
        <td><p class="help_no">1.</p></td>
        <td><p class="help_box">Select the location on the map by clicking and dragging the marker. Be as accurate as possible!</p></td>
         <td><p class="help_no">2.</p></td>
        <td><p class="help_box">Enter the details of the accident and a brief comment explaining what happened.</p></td>
        <td><p class="help_no">3.</p></td>
        <td><p class="help_box">Click submit and make sure the entered information is accurate. If not, click to start over.</p></td>
        </div>
      
    
  </body>
</html>
