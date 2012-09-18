<head>
<script type="text/javascript">
function delayedRedirect()
{
    window.location = "index.php";
}
</script>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>

<?php
// Database Connection
include 'local_connection2.php';

$time = $_POST['time'];
$lat = $_POST['current_lat'];
if (strpos($time, 'PM'))
{
    $hour = substr($time,0,2) + 12;
    $min = substr($time,2,2);
    $time = $hour . ":" . $min;       
} 

$sql="INSERT INTO hazards (lat, lng, explanation, date, time) VALUES ('$_POST[current_lat]','$_POST[current_lng]','$_POST[explanation]','$_POST[date]','$time')";

$go = "thanks.php";
if (!mysql_query($sql,$con))
  {
    $go ="error.php";
  die('Error: ' . mysql_error());
  }
mysql_close($con);

?> 


<html>
<head>
<script type="text/javascript">
function delayedRedirect()
{
    window.location = "index.html"
}
</script>
<link rel="stylesheet" type="text/css" href="c/thanks.css" />
</head>
<body>
<div class="WideBox">
<img src="i/logo.png"/>
<p class="Thanks"> Thanks for reporting this hazard.<br> You can access our collected data on incidents, or report another incident from our home page.</p>
  </div>

<body onLoad="setTimeout('delayedRedirect()', 3000)">
</body>
</html>
