function addTime(hour, mins)
{  	        
    	    var h = parseInt($("#ptTimeSelectUserSelHr").html()) ;
	        var m = parseInt($("#ptTimeSelectUserSelMin").html());
	        
	        var am_pm = $("#ptTimeSelectUserSelAmPm").html();
	
	        if (am_pm == "PM")
	        {
	            h += 12;
	        }
	        $(mins).val(m);
	        $(hour).val(h);
}
