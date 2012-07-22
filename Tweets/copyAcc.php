<?php
/**
* copytoDB
* Copies the tweets downloaded to the Permanent DB
*/

//Origin
$DB1 = lugolo_tweets;
$Table1 = tweets3;
//Dest
$DB2 = lugolo_tweets;
$Table2 = accidents;

$dba = mysql_connect('localhost', 'lugolo_twitter', 'twitter') or die(mysql_error());
$sql = "
INSERT INTO $DB2.$Table2 (
   severity,
   vehicle,
   date,
   time,
   lat,
   lng,
   description,
   elapsed,
   acc_cause
)
SELECT 
   $DB1.$Table1.source,
   $DB1.$Table1.source,
   $DB1.$Table1.date,
   $DB1.$Table1.time,
   $DB1.$Table1.lat,
   $DB1.$Table1.lng,
   $DB1.$Table1.text,
   000,
   $DB1.$Table1.text

FROM $DB1.$Table1
";
$result = mysql_query($sql) or die(mysql_error());


?>