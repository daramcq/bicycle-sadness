$("#accident_choice").click(function(){
    $("#choice_panel").load('accident_report.html');

    if ($("#choice_made").html()!="made")
    {
        var marker_functions = $.getScript('js/marker_functions.js');
        $('#map_functions').append(marker_functions);
        $("#choice_made").html("made");
    }    
});
