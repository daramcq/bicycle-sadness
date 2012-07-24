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

function validateDate(date)
{
    if ($(date).val()=="")
        return false;
    else
        return true;    
}


function validateTime(time)
{
    if ($(time).val()=="")
        return false;
    else
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
		

function isDigit(c) 
{ 
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

