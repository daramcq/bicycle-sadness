<?php

$username="u1239696_osc";
$password='bikeprojectdb';					// "thisisourbikeproject";
$database="db1239696_outspoken";
$hostname='mysql1478int.cp.blacknight.com'; 


$con = mysql_connect($hostname,$username,$password);
if (!$con)
  {

  die('Could not connect blah: ' . mysql_error());
  }


$select = mysql_select_db($database, $con);

if (!$select)
{
	die('Can\'t use db: ' . mysql_error());
}
?>
