function validateText(text)
{
    if (!$(text).val()=="")
        return true;
    else
        return false;    
}

function validateLocation(loc)
{
    if ($(loc).val()=="")
        return false;
    else
        return true;
}

function validateDate(date){
    if ($(date).val()==""){
        return false;
    }else{
	var set_date = $('#date').datepicker("getDate");
	var cur_date = new Date();
	if (set_date > cur_date){
	    return false;
	}else if (cur_date > set_date){
	    return true;
	}
	else{}
    }
}


function validateTime(time)
{
    if ($(time).val()==''){
        return false;
    }
    else{
        return true;    
    }
}
	

function isDigit(c) { 
    return ((c=='0')||(c=='1')||(c=='2')||(c=='3')||(c=='4')||(c=='5')||(c=='6')||(c=='7')||(c=='8')||(c=='9'));
}
 
function isNumeric(n) {
 
    num = parseInt(n,10);
 
    return !isNaN(num);
}

function isInDublin(lat, lng){
    var southMost = '53.17836'; 
    var northMost = '53.633389';
    var eastMost = '-6.04394';
    var westMost = '-6.54665';
    if (lat > northMost || lat < southMost || lng < eastMost || lng > westMost)
    {        
        return false; 
    }
    else
        return true;
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
function validateAccident(){

    var lat = $("#inc_lat").val();
    var lng = $("#inc_lng").val();
    $("#acc_lat").val(lat);
    $("#acc_lng").val(lng);

    if (validateLocation("#inc_lat") && validateDate("#date") && validateTime("#time") && isInDublin(lat,lng))
    {                
        var elapsed = new Date().getTime() - $("#counter").val();
        $("#counter").val(elapsed);
        convertTime('#time');
                
        return true;
    }
    else
    {
        var resp = " ";
        
        if (!validateLocation("#inc_lat"))
            resp += "\n- Location";
        else if (!isInDublin(lat,lng)){
                resp += "\n - A location in Dublin";
            }        
        if (!validateDate("#date"))
            resp += "\n- Date";
        if (!validateTime("#time"))
            resp += "\n- Time";        
        alert('Report is not complete. Please enter: '+resp);
        return false;
    }
}

function validateTheft()
{

    
    var lat = $("#inc_lat").val();
    var lng = $("#inc_lng").val();
    $("#theft_lat").val(lat);
    $("#theft_lng").val(lng);

    if (validateLocation("#inc_lat") && validateDate("#left_date") && validateTime('#left_time_box') && validateTime('#found_time_box') && validateDate("#found_date") && isInDublin(lat,lng))
    {
        var elapsed = new Date().getTime() - $("#counter").val();
        $("#counter").val(elapsed);                
        convertTime('#left_time_box');
        convertTime('#found_time_box');

        return true;
    
    }
    else
    {
        var resp = "The report is not complete. Please enter: ";
        
        if (!validateLocation("#inc_lat"))
            resp += "\n- Location";
        if (validateLocation('#inc_lat') && !isInDublin(lat,lng))
            resp += '\n- A location in Dublin';
        if (!validateDate("#left_date"))
            resp += "\n- Date left";
        if (!validateTime('#left_time_box'))
            resp += "\n- Time left";
        if (!validateTime('#found_time_box'))
            resp += "\n- Time found missing";
        if (!validateDate("#found_date"))
            resp += "\n- Date found missing";
    
        alert(resp);
        return false;
    }   
}
function validateHazard()
{  

    var lat = $("#inc_lat").val();
    var lng = $("#inc_lng").val();

    $("#haz_lat").val(lat);
    $("#haz_lng").val(lng);

    if (validateLocation("#inc_lat") && validateDate("#date") && validateTime("#time") && validateText("#explanation") && isInDublin(lat,lng))
    {
        var elapsed = new Date().getTime() - $("#counter").val();
        $("#counter").val(elapsed);
        convertTime('#time');
               
        return true;
    }
    else
    {
        var resp = "Report not completed. Please add: ";
        if (!validateText("#explanation"))
            resp += "\n- Explanation";
        if (!validateLocation("#haz_lat"))
            resp += "\n- Location";
        if (validateLocation('#haz_lat') && !isInDublin(lat,lng))
            resp += '\n- A location in Dublin';
        if (!validateDate("#date"))
            resp += "\n- Date";
        if (!validateTime("#time"))
            resp += "\n- Time";        
        alert(resp);
        return false;
    }
}
function convertTime(time_box){
    var time = $(time_box).val();
    var hour = time.split(":");
    if (hour[1].indexOf('PM')!=-1){
      hour[0] = parseInt(hour[0]) + 12;
      hour[0] = hour[0].toString();
    }
    var mins = hour[1].split(' ');

    $(time_box).val(hour[0]+':'+ mins[0]);

}

