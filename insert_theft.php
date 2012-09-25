<?php
// Database Connection
include 'local_connection2.php';

$sql="INSERT INTO thefts (lat, lng, date_left, time_left, found_date, found_time, elapsed)
VALUES 
('$_POST[current_lat]','$_POST[current_lng]','$_POST[left_date]','$_POST[left_time]', '$_POST[found_date]','$_POST[found_time]', '$_POST[counter]')";

if (!mysql_query($sql,$con))
{
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
<p class="Thanks"> Thanks for reporting your bike-theft!<br> You can access our collected data on incidents, or report another incident from our home page.</p>
  </div>

<body onLoad="setTimeout('delayedRedirect()', 3000)">
</body>
</html>
