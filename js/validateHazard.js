function validateHazard()
{  
    
    if (validateLocation("#inc_lat") && validateDate("#date") && validateTime("#time") && validateText("#explanation"))
    {
        var elapsed = new Date().getTime() - $("#counter").val();
        $("#counter").val(elapsed);
        
        $("#haz_lat").val($("#inc_lat").val());
        $("#haz_lng").val($("#inc_lng").val());
               
        return true;
    }
    else
    {
        var resp = "Report not completed. Please add: ";
        if (!validateText("#explanation"))
            resp += "\n- Explanation";
        if (!validateLocation("#haz_lat"))
            resp += "\n- Location";
        if (!validateDate("#date"))
            resp += "\n- Date";
        if (!validateTime("#time"))
            resp += "\n- Time";        
        alert(resp);
        return false;
    }
}