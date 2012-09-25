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


$sql="INSERT INTO hazards (lat, lng, explanation, date, time, elapsed) VALUES ('$_POST[current_lat]','$_POST[current_lng]','$_POST[explanation]','$_POST[date]','$_POST[time]','$_POST[counter]')";

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
