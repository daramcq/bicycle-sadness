$("#general_choice").click(function(){
    $("#choice_panel").load('hazard_report.html');
    
    if ($("#choice_made").val()!="made")
    {
        var marker_functions = $.getScript('js/marker_functions.js');
        $('#map_functions').append(marker_functions);
        $("#choice_made").val("made");
    }    
     });
