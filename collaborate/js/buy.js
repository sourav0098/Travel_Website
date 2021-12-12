function report(){
    var user = document.getElementById("username").value;
    user = user.trim();
    if(user.length == 0){
       document.getElementById("nameError").innerHTML = "Please enter your name"
    }
    else{document.getElementById("nameError").innerHTML = "";
}
document.getElementById("name").onclick = function(){
        document.getElementById("nameError").innerHTML = ""
    }
}
    

function report1(){
    var email2 = document.getElementById("email").value;
    var emailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w)*\.\w+([-.]\w+)*$/;
    var ok = emailRegExp.test(email2);
    if(ok ){
        document.getElementById("emailError").innerHTML = "";
    }
    else{
        document.getElementById("emailError").innerHTML = "Please enter valid email address"; 
    }
    document.getElementById("email").onclick = function(){
        document.getElementById("emailError").innerHTML = ""
    }
}

function report2(){
    var phone2 = document.getElementById("phone").value;
    var phoneRegExp = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
    var ok1 = phoneRegExp.test(phone2);
    if(ok1){
        document.getElementById("phoneError").innerHTML = ""
    }
    else{
        document.getElementById("phoneError").innerHTML = "Please enter valid phone number";
    }     
    document.getElementById("phone").onclick = function(){
        document.getElementById("phoneError").innerHTML = ""
    }
}

function report3(){
    var pst = document.getElementById("passport").value;
    var pstRegExp = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/ ;
    var ok2 = pstRegExp.test(pst);
    if(ok2){
        document.getElementById("psteError").innerHTML = ""
    }
    else{
        document.getElementById("pstError").innerHTML = "Please check your passport number";
    }     
    document.getElementById("passport").onclick = function(){
        document.getElementById("pstError").innerHTML = ""
    }
}

function  show(){
    var date2 = document.getElementById("date").value;
    var time2 = document.getElementById("time").value;
    if(nameError.innerHTML==""&&
       emailError.innerHTML==""&&
       phoneError.innerHTML==""&&
       pstError.innerHTML==""&&
       date2!==""){
    //name
    var userName = document.getElementById("username").value;
    document.getElementById("name1").innerHTML = userName;
    //phone
    var phoneElt = document.getElementById("phone").value;
    document.getElementById("phone1").innerHTML = phoneElt;
    //emai;
    var emailElt = document.getElementById("email").value;
    document.getElementById("email1").innerHTML = emailElt;
    //date
    var dateElt = document.getElementById("date").value;
    document.getElementById("date1").innerHTML = dateElt;
    //time
    var timeElt = document.getElementById("time").value;
    document.getElementById("time1").innerHTML = timeElt;
           alert("Purchase succeeded");
       }
}
