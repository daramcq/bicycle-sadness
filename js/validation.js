function validateAccident()
{
    addTime();
    if (validateLocation("#inc_lat") && checkRadio("acc_info","severity") && checkRadio("acc_info","vehicle") && checkRadio("acc_info","cause") && validateDate("date") && validateTime("#acc_hour"))
    {                
        var elapsed = new Date().getTime() - $("#counter").val();
        $("#counter").val(elapsed);
        
        $("#acc_lat").val($("#inc_lat").val());
        $("#acc_lng").val($("#inc_lng").val());        
        return true;
    }
    else
    {
        var resp = " ";
        
        if (!validateLocation("#inc_lat"))
            resp += "\n- Location";
        if (!checkRadio("acc_info","severity"))
            resp += "\n- Severity";
        if (!checkRadio("acc_info","vehicle"))
            resp += "\n- Vehicle";
        if (!checkRadio("acc_info","cause"))
            resp += "\n- Cause";
        if (!validateDate("#date"))
            resp += "\n- Date";
        if (!validateTime("#acc_hour"))
            resp += "\n- Time";        
        alert('Not fully filled out. Please enter: '+resp);
        return false;
    }
}

function validateTheft()
{
    


}

function validateHazard()
{
    validateLocation("current_lat");


}

function validateLocation(loc)
{
    if ($(loc).val()=="")
        return false;
    else
        return true;
}

function validateDate(date)
{
    if ($(date).html()=="")
        return false;
    else
        return true;    
}

function validateTime(time)
{
    if (isNaN($(time).val()) || $(time).val()==0)
        return false;
    else
        return true;    

}
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
        var elapsed = new Date().getTime() - $("#counter").val();
        $("#counter").val() = elapsed;
        return true;
    }
     // http://quomon.com/question-Radio-button-validation-2405.aspx
   

function addTime()
{  	        
    	    var hour = parseInt($("#ptTimeSelectUserSelHr").html()) ;
    	    
    	    if (isNaN(hour) || hour==0)
    	      alert('Disaster ' +hour);    	       

	        var mins = parseInt($("#ptTimeSelectUserSelMin").html());
	        /*if (isNaN(parseInt($("#ptTimeSelectUserSelMin").html())));
	            alert('hour is NaN');  */
	        var am_pm = $("#ptTimeSelectUserSelAmPm").html();
	
	        if (am_pm == "PM")
	        {
	            hour+=12;
	        }
	        $("#acc_min").val(mins);
	        $("#acc_hour").val(hour);
} 		
    function isDigit(c) {
 
    return ((c=='0')||(c=='1')||(c=='2')||(c=='3')||(c=='4')||(c=='5')||(c=='6')||(c=='7')||(c=='8')||(c=='9'));
}
 
function isNumeric(n) {
 
    num = parseInt(n,10);
 
    return !isNaN(num);
}
 
function padZero(n) {
    v="";
    if (n<10){
        return ('0'+n);
    }
    else
    {
        return n;
    }
}
    
    function timeValidate(ctl) {

    t=ctl.value.toLowerCase();
    t=t.replace(" ","");
    t=t.replace(".",":");
    t=t.replace("-","");
 
    if (isNumeric(t)) {
        if (t.length==3) {
            t="0"+t;
        }
        if (t.length==4) {
            t=t.charAt(0)+t.charAt(1)+":"+t.charAt(2)+t.charAt(3);
        }
    }
 
    var t=new String(t);
    tl=t.length;
 
    if (tl==1 ) {
        if (isDigit(t)) {
            ctl.value=t+":00 AM";
        }
        else {
            return false;
        }
    }
    else if (tl==2) {
        if (isNumeric(t)) {
            if (parseInt(t,10)<12){
                if (t.charAt(1)!=":") {
                    ctl.value= t + ':00 AM';
                }
                else {
                    ctl.value= t + '00 AM';
                }
            }
            else if (parseInt(t,10)==24) {
                ctl.value= "0:00 AM";
            }
            else if (parseInt(t,10)<24) {
                if (t.charAt(1)!=":") {
                    ctl.value= (t-12) + ':00 PM';
                }
                else {
                    ctl.value= (t-12) + '00 PM';
                }
            }
            else if (parseInt(t,10)<=60) {
                ctl.value= '0:'+padZero(t)+' AM';
            }
            else {
                ctl.value= '1:'+padZero(t%60)+' AM';
            }
        }
        else
        {
            if ((t.charAt(0)==":")&&(isDigit(t.charAt(1)))) {
                ctl.value = "0:" + padZero(parseInt(t.charAt(1),10)) + " AM";
            }
            else {
                return false;
            }
        }
    }
    else if (tl>=3) {
        
        var mode;
        var arr = t.split(":");
        if (t.indexOf(":") > 0)
        {
            hr=parseInt(arr[0],10);
            mn=parseInt(arr[1],10);
            if (t.indexOf("PM")>0) {
                mode="PM";
            }
            else {
                mode="AM";
            }
 
            if (isNaN(hr)) {
                hr=0;
            } else {
                if (hr>24) {
                    return false;
                }
                else if (hr==24) {
                    mode="AM";
                    hr=0;
                }
                else if (hr>11) {
                    mode="PM";
                    if (hr>12) {
                        hr-=12;
                    }
                }
            }
 
            if (isNaN(mn)) {
                mn=0;
            }
            else {
                if (mn>60) {
                    mn=mn%60;
                    hr+=1;
                }
            }
        } else {
 
            hr=parseInt(arr[0],10);
 
            if (isNaN(hr)) {
                hr=0;
            } else {
                if (hr>24) {
                    return false;
                }
                else if (hr==24) {
                    mode="AM";
                    hr=0;
                }
                else if (hr>11) {
                    mode="PM";
                    if (hr>12) {
                        hr-=12;
                    }
                }
            }
 
            mn = 0;
        }
 
        if (hr==24) {
            hr=0;
            mode="AM";
        }
        ctl.value=hr+":"+padZero(mn)+" "+mode;
    }
}

