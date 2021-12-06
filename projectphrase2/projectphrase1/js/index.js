var ipt1 = document.querySelector('.ipt1');
var ipt2 = document.querySelector('.ipt2');
var ipt3 = document.querySelector('.ipt3');
//search flight
var btn2 = document.querySelector('.btn2');
var cf = document.querySelector('.cf');
var da = document.querySelector('.da');
var pos_mark = document.querySelector('.pos_mark');
//cancel
var plane_btn1 = document.querySelector('.plane_btn1');
//buy
var plane_btn2 = document.querySelector('.plane_btn2');
//return
var rad1 = document.querySelector('.rad1');
//oneway
var rad2 = document.querySelector('.rad2');
//flight type
var select_ipt = document.querySelector('.select_ipt');


//airline
var hgs = document.querySelector('.hgs');
var Cockpit = document.querySelector('.Cockpit');
//takeoff time
var Takeoff = document.querySelector('.Takeoff');
//flight mode
var Flight = document.querySelector('.Flight');
var hk = document.querySelector('.hk');

var userInfor = document.querySelector('.userInfor');



var planeTicket = document.querySelector('.planeTicket');

var mode = 'Return';
var seat = 'Economy';
rad1.onclick = function () {
    Flight.innerHTML = 'Return'
}
rad2.onclick = function () {
    Flight.innerHTML = 'One way'
}
select_ipt.onchange = function () {
    Cockpit.innerHTML = this.value
}
hk.onchange = function () {
    hgs.innerHTML = this.value
}



//cancel
plane_btn1.onclick = function () {
    pos_mark.style.display = 'none'
}
btn2.onclick = function () {
    if(ipt2.value == '' || ipt1.value == '' || ipt3.value == ''){
        alert('Please enter the departure, destination and time')
        return
    }else {
        cf.innerHTML = ipt1.value
        da.innerHTML = ipt2.value
        Takeoff.innerHTML = ipt3.value
        pos_mark.style.display = 'flex'
    }

}
//buy
plane_btn2.onclick = function () {
    planeTicket.style.display = 'none'
    userInfor.style.display = 'block'
}

/*var bottom_btn = document.querySelector(".bottom_btn");

bottom_btn.onclick = function () {
    pos_mark.style.display = 'none'
    planeTicket.style.display = 'block'
    userInfor.style.display = 'none'
    alert('Purchase successful')
}*/

window.onload = function(){

    //name
    var name = document.getElementById("name");
    name.onblur = function(){
        //get name
        var name1 = document.getElementById("name").value;
        //Remove front and rear whitespace
        name1 = name1.trim();
        if(name1.length == 0){
            document.getElementById("nameError").innerHTML = "Name is empty"
        }
        else{
            document.getElementById("nameError").innerHTML = "";
        }
        document.getElementById("name").onfocus = function(){
            document.getElementById("nameError").innerHTML= "";
    }
        

    //email
    var email = document.getElementById("email");
    email.onblur = function(){
        var email1 = document.getElementById("email").value;
        var emailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w)*\.\w+([-.]\w+)*$/;
        var ok = emailRegExp.test(email1);
        if(ok){
            document.getElementById("emailError").innerHTML = "";
        }
        else{
            document.getElementById("emailError").innerHTML = "invalid email address";
        }
    }
    document.getElementById("email").onfocus = function(){
        document.getElementById("emailError").innerHTML= "";
    }

    //phone
    var phone = document.getElementById("phone");
    phone.onblur = function(){
        var phone1 = document.getElementById("phone").value;
        var phoneRegExp = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
        var ok1 = phoneRegExp.test(phone1);
        if(ok1){
            document.getElementById("phoneError").innerHTML = "";
        }
        else{
            document.getElementById("phoneError").innerHTML = "invalid phone number";
        }
    }
    document.getElementById("phone").onfocus = function(){
        document.getElementById("phoneError").innerHTML= "";
    }


}
    //passport
    var pst = document.getElementById("pst");
    pst.onblur = function(){
        var pst1 = document.getElementById("pst").value;
        var pstRegExp =/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/ ;
        var ok2 = pstRegExp.test(pst1);
        if(ok2){
            document.getElementById("pstError").innerHTML = "";
        }
        else{
            document.getElementById("pstError").innerHTML = "invalid passport number";
        }
    }
        document.getElementById("pst").onfocus = function(){
            document.getElementById("pstError").innerHTML = "";
        }

        //submit
        var submitElt = document.getElementById("submit");
        submitElt.onclick = function(){
            //When all the form items are valid, submit the information to purchase the ticket
            if(nameError.innerHTML == "" 
            && emailError.innerHTML == "" 
            && phoneError.innerHTML == "" 
            && pstError.innerHTML == ""){
                alert("Purchase successful")
             
            }
        }
}
