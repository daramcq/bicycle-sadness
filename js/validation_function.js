<script type="text/javascript">
    function validateForm()
    {
       addTime();
       
       var loc=document.forms["acc_info"]["current_lat"].value;              
       var loc_resp = "";
        
       var date=document.forms["acc_info"]["date"].value;
       var date_resp="";
       
       var sev_resp = "";
       var vehicle_resp="";
       var cause_resp="";
       
       var hour_time = document.forms["acc_info"]["acc_hour"].value;
       var time_resp = "";
       
       if (loc==""||date==""||!checkRadio("acc_info","severity")||!checkRadio("acc_info","vehicle")||hour_time=="0" ||hour_time==""|| !checkRadio("acc_info","cause"))
       {        
            if (loc=="")
                loc_resp = "\n- Location";
            
            if (date=="")
                date_resp="\n- Date";
                       
            if (!checkRadio("acc_info","severity"))
                sev_resp="\n- Severity";            
       
            if (!checkRadio("acc_info","vehicle"))
                vehicle_resp="\n- Vehicle Involved";
                
            if (hour_time=="0"||hour_time=="")
                time_resp="\n- Time " + time_string;
                
            if (!checkRadio("acc_info","cause"))
                cause_resp="\n- Cause";
                      
            alert("The report is not complete, please enter the Incident's: " + loc_resp + sev_resp + vehicle_resp + date_resp + time_resp + cause_resp);                       
            return false;          
        }
        var elapsed = new Date().getTime() - document.getElementById("counter").value;
        document.getElementById("counter").value = elapsed;
        return true;
    }
     // http://quomon.com/question-Radio-button-validation-2405.aspx
     function checkRadio (frmName, rbGroupName) 
     {
        var radios = document[frmName].elements[rbGroupName];
        for (var i=0; i <radios.length; i++) 
        {
            if (radios[i].checked) 
            {
                return true;
            }
        }
        return false;
     }
     </script>
     <script type="text/javascript">
		  function addTime()
	      {  	        
    	    var hour = parseInt(document.getElementById("ptTimeSelectUserSelHr").innerHTML) ;
    	    if (isNaN(hour) || hour==0)
    	      alert('Disaster ' +hour);    	       
    	    
    	    else
    	    { 
    	       hour = parseInt(hour);    
            }
	        var mins = parseInt(document.getElementById("ptTimeSelectUserSelMin").innerHTML);
	        if (isNaN(parseInt(document.getElementById("ptTimeSelectUserSelMin").innerHTML)));
	            hour=0;  
	        var am_pm = document.getElementById("ptTimeSelectUserSelAmPm").innerHTML;
	
	        if (am_pm == "PM")
	        {
	            hour+=12;
	        }
	        document.getElementById("acc_min").value = mins;
	        document.getElementById("acc_hour").value = hour;
	     }		
</script>