<?php
// Database Connection
include 'connection.php';

$severity_info = $_POST['severity'];
$lat = $_POST['current_lat'];
$lng = $_POST['current_lng'];
$desc = $_POST['comment'];
$hour = $_POST['hours'];
$min = $_POST['min'];
$time = $hour . ":" . $min . ":00" ;
$elapsed = $_POST['counter'];

$sql="INSERT INTO accidents (severity, vehicle, date, time, lat, lng, description, elapsed, acc_cause)
VALUES
('$_POST[severity]','$_POST[vehicle]','$_POST[date]','$time','$_POST[current_lat]','$_POST[current_lng]', '$_POST[comment]', '$elapsed', '$_POST[cause]')";

$go = "thanks.php";
if (!mysql_query($sql,$con))
  {
    $go ="error.php";
  die('Error: ' . mysql_error());
  }


mysql_close($con)

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
<p class="Thanks"> Thanks for reporting your cycling accident or near-miss!<br> You can access our collected data on incidents, or report another incident from our home page.</p>
  </div>

<body onLoad="setTimeout('delayedRedirect()', 3000)">


</html>
