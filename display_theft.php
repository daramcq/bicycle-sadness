<?php 
require "local_connection2.php";
require "functions.php";

// Open connection to db server
$connection = mysql_connect ("mysql1443int.cp.blacknight.com", $username, $password);

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
$query = "SELECT * FROM thefts WHERE 1";
$result = mysql_query($query);
if (!$result)
{
    die('Invalid query : ' . mysql_error());
}

header("Content-type: text/xml");

// Start XML file, echo parent node
echo '<thefts>';

// Iterate through the rows adding XML nodes for each
while ($row = @mysql_fetch_assoc($result))
{
    // ADD TO XML DOCUMENT NODE
    echo '<theft ';
    echo 'date_left="' . parseToXML($row['date_left']) . '" ';
    echo 'time_left="' . parseToXML($row['time_left']) . '" ';
    echo 'found_date="' . parseToXML($row['found_date']) . '" ';
    echo 'found_time="' . parseToXML($row['found_time']) . '" ';
    echo 'lat="' . $row['lat'] . '" ';
    echo 'lng="' . $row['lng'] . '" ';
    echo '/>';
}

echo '</thefts>';
    
?>
