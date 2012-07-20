<?php 
require "local_connection2.php";
require "functions.php";

// Open connection to db server
$connection = mysql_connect (localhost, $username, $password);

if (!$connection)
{
    die('Not connected : ' . mysql_error());
}

// Set the active MySql database
$db_selected = mysql_select_db($database, $connection);
if (!db_selected)
{
    die ('Can\'t use db : '. mysql_error());
}

// Select all the rows in the markers table
$query = "SELECT * FROM accidents2 WHERE 1";
$result = mysql_query($query);
if (!$result)
{
    die('Invalid query : ' . mysql_error());
}

header("Content-type: text/xml");

// Start XML file, echo parent node
echo '<markers>';

// Iterate through the rows adding XML nodes for each
while ($row = @mysql_fetch_assoc($result))
{
    // ADD TO XML DOCUMENT NODE
    echo '<marker ';
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

echo '</markers>';
    
?>
