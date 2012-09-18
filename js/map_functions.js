<script type="text/javascript">
    <!--set up map -->
    var cloudmade = new CM.Tiles.CloudMade.Web({key: '4a7ecbf54cd74519a944efa10e330c2e', styleId:68130});
    var map = new CM.Map('map_canvas', cloudmade);
    map.setCenter(new CM.LatLng(53.3649, -6.218), 12);

    <!-- map controls -->
    var bottomRight = new CM.ControlPosition(CM.BOTTOM_RIGHT, new CM.Size(20, 40));
    var topRight = new CM.ControlPosition(CM.TOP_RIGHT, new CM.Size(20, 100));
    var bottomLeft = new CM.ControlPosition(CM.BOTTOM_LEFT, new CM.Size(20, 100));
    map.addControl(new CM.SmallMapControl(), bottomRight);
    //map.addControl(new CM.LargeMapControl());
    //map.addControl(new CM.ScaleControl());
    //map.addControl(new CM.OverviewMapControl(), topRight);


    <!-- set the centre point of the map -->
    var dublinLocation = new CM.LatLng(53.345171, -6.275854);
    map.setCenter(dublinLocation, 12);
</script>