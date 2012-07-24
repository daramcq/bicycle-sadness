<?php
// Database Connection
include 'local_connection2.php';

$lat = $_POST['current_lat'];
$lng = $_POST['current_lng'];
$left_date = $_POST['left_date'];
$left_date = $_POST['found_date'];
$left_time = $_POST['time_left']; 
$found_time = $_POST['time_found'];
$elapsed = $_POST['counter'];        

if (strpos($left_time, 'PM'))
{
    $hour = substr($left_time,0,2) + 12;
    $min = substr($left_time,2,2);
    $left_time = $hour . ":" . $min;       
}    
if (strpos($found_time, 'PM'))
{
    $hour = substr($found_time,0,2) + 12;
    $min = substr($found_time,2,2);
    $found_time = $hour . ":" . $min;       
}
echo  "<h1>" . $left_time . "    " . $found_time . "</h1>" ;

$sql="INSERT INTO thefts (lat, lng, date_left, time_left, found_date, found_time, elapsed)
VALUES 
('$_POST[current_lat]','$_POST[current_lng]','$_POST[left_date]','$left_time','$_POST[found_date]','$found_time', '$elapsed')";

if (!mysql_query($sql,$con))
{
  die('Error: ' . mysql_error());
}


mysql_close($con);

?> 

<head>
<script type="text/javascript">
function delayedRedirect()
{
    window.location = "index.php"
}
</script>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<html>
<div class="WideBox">
<p class="Thanks"> Thanks for reporting your bike-theft!<br> You can access our collected data on incidents, or report another incident from our home page.</p>
  </div>

<!--<body onLoad="setTimeout('delayedRedirect()', 3000)">-->
</html>
