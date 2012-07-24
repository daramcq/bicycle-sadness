function validateTheft()
{

    if (validateLocation("#inc_lat") && validateDate("#left_date") && validateDate("#found_date"))
    {
        var elapsed = new Date().getTime() - $("#counter").val();
        $("#counter").val(elapsed);
        
        $("#theft_lat").val($("#inc_lat").val());
        $("#theft_lng").val($("#inc_lng").val());
        var lng = $("#theft_lng").val();
  
        return true;
    
    }
    else
    {
        var resp = "The report is not complete";
        
        if (!validateLocation("#inc_lat"))
            resp += "\n- Location";
        if (!validateDate("#left_date"))
            resp += "\n- Date left";
        if (!validateDate("#found_date"))
            resp += "\n- Date found missing";
        if (!validateTime("#found_mins"))
            resp+= "\n- Time found missing";
            
        alert(resp);
        return false;
    }
}

