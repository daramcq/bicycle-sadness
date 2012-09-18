<?php
require "local_connection2.php"; 
require "functions.php";

$connection = mysql_connect (localhost, $username, $password);

if (!$connection)
{
    die('Not connected : ' . mysql_error());
}

$db_selected = mysql_select_db($database, $connection);
if (!db_selected)
{
    die ('Can\'t use db : '. mysql_error());
}

$query = "SELECT * FROM accidents WHERE 1";
$result = mysql_query($query);
if (!$result)
{
  die('Invalid query : ' . mysql_error());
}

print '<?xml version="1.0" encoding="UTF-8"?>';
?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
<?php
while ($row = @mysql_fetch_assoc($result))
{
  echo "<Placemark>\n";
  echo '  <name>' . parseToXML($row['acc_cause']) . "</name>\n";
  echo '  <date>' . parseToXML($row['date']) . "</date>\n";
  echo '  <time>' . parseToXML($row['time']) . "</time>\n";
  echo "  <description>\n";
  echo '    accident_cause="' . parseToXML($row['acc_cause']) . '"'."\n";
  echo '    severity="' . parseToXML($row['severity']) . '"'."\n";
  echo '    vehicle="' . parseToXML($row['vehicle']) . '"'."\n";
  echo '    comment="'. parseToXML($row['description']) . '"'."\n";
  echo "  </description>\n";
  echo "  <Point>\n";
  echo '    <coordinates>'.$row['lat'].','.$row['lng']."</coordinates>\n"; 
  echo "  </Point>\n";
  echo "</Placemark>\n";
}
?>
</Document>
</kml>
