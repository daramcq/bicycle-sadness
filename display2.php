<?php 
require "local_connection2.php";
require "functions.php";


// Select all the rows in the markers table
$query = "SELECT * FROM accidents";
$result = mysql_query($query);
if (!$result)
{
    die('Invalid query : ' . mysql_error());
}

header("Content-type: text/xml");

// Start XML file, echo parent node
echo '<accidents>';

// Iterate through the rows adding XML nodes for each
while ($row = @mysql_fetch_assoc($result))
{
    // ADD TO XML DOCUMENT NODE
    echo '<accident ';
    echo 'severity="' . parseToXML($row['severity']) . '" ';
    echo 'vehicle="' . parseToXML($row['vehicle']) . '" ';
    echo 'date="' . parseToXML($row['date']) . '" ';
    echo 'lat="' . $row['lat'] . '" ';
    echo 'lng="' . $row['lng'] . '" ';
    //echo 'comment="'. parseToXML($row['comment']) . '" ';
    echo 'time="' . parseToXML($row['time']).'" ';
    echo 'acc_cause="' . parseToXML($row['acc_cause']) . '"';
    echo '/>';
}

echo '</accidents>';
    
?>
