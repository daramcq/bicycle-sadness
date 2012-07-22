<?php
 
 // Gets Tweets using Search Api and puts them into a database/table 
 
$DB = lugolo_tweets; //Database Name
$Table = tweets3;  // Table Name

$q = "%23SadBike";  //Query %23 for # https://dev.twitter.com/docs/using-search

$request = "http://search.twitter.com/search.json?q=".urlencode($q);
$response = file_get_contents($request);
$jsonobj = json_decode($response);
$numupdates = 0;

if($jsonobj != null){
 
	$con = mysql_connect('localhost', 'lugolo_twitter', 'twitter');
 
	if (!$con){
		die('Could not connect: ' . mysql_error());
	}

	foreach($jsonobj->results as $item){
echo $item->geo->coordinates[0];
		$id = $item->id;
		$created_at = $item->created_at;
		$created_at = strtotime($created_at);
		//$mysqldate = date('Y-m-d H:i:s',$created_at); matching Accidents DB
		$mysqldate = date('Y-m-d',$created_at); //date
		$mysqltime = date('H:i:s',$created_at); //time
		$from_user = mysql_real_escape_string($item->from_user);
		$from_user_id = $item->from_user_id;
		$text = mysql_real_escape_string($item->text);
		$source = mysql_real_escape_string($item->source);
		if($item->geo=='')
		{
		 $lat = '0';
		 $lng = '0';
		 }
		else 
		{
			$lat = (float) $item->geo->coordinates[0];
			$lng = (float) $item->geo->coordinates[1];
		}
		$iso_language_code = $item->iso_language_code;
		$profile_image_url = mysql_real_escape_string($item->profile_image_url);
		$to_user_id = $item->to_user_id;
		if($to_user_id==""){ $to_user_id = 0; }
		$query = mysql_real_escape_string($query);
 
		mysql_select_db("$DB", $con);
                // SQL query to create table available at http://snipplr.com/view/56995/sql-query-to-create-a-table-in-mysql-to-store-tweets/
               
               
		$query = "INSERT into $Table VALUES ($id,'$mysqldate','$mysqltime','$from_user',$from_user_id,'$text','$source',$lat,$lng,'$iso_language_code','$profile_image_url',$to_user_id,'$q')";

		$result = mysql_query($query);
		$numupdates = $numupdates + 1;
	}
 
	mysql_close($con);
	echo 'Num Updates: '.$numupdates;
}
 
?>