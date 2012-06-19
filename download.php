<!DOCTYPE html>
<html>
  <head>
  <title>Cycling Accident Report</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
     <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
  <?php include 'header.php'; ?>
  <div class="IndexGrid">
  <div class="DownloadBox" onmouseover="this.className='DownloadBoxHighlight'" onmouseout="this.className='DownloadBox'">
  <a href="#">
  <h1>CSV</h1>
  <h2>Download CSV File</h2></a>
  Suitable for R software environment.
  </div>
  
  <div class="DownloadBox" onmouseover="this.className='DownloadBoxHighlight'" onmouseout="this.className='DownloadBox'">
  <a href="#">
    <h1> LYR </h1>
  <h2>Download LYR File</h2></a>
  Suitable for ArcGIS software suite.
  </div>
  
  <div class="DownloadBox" onmouseover="this.className='DownloadBoxHighlight'" onmouseout="this.className='DownloadBox'">
  <!-- http://artistsvalley.deviantart.com/art/Free-Database-Icons-89510032 -->
  <a href="#">
  <h1> TAB </h1>
  <h2>Download TAB File</h2>
  </a>
  Suitable for MapInfo software.
  </div>
  </body>
</html>
