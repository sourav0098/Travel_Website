var ipt1 = document.querySelector('.ipt1');
var ipt2 = document.querySelector('.ipt2');
var ipt3 = document.querySelector('.ipt3');
var btn2 = document.querySelector('.btn2');
var cf = document.querySelector('.cf');
var da = document.querySelector('.da');
var pos_mark = document.querySelector('.pos_mark');
var plane_btn1 = document.querySelector('.plane_btn1');
var plane_btn2 = document.querySelector('.plane_btn2');

var rad1 = document.querySelector('.rad1');
var rad2 = document.querySelector('.rad2');
var select_ipt = document.querySelector('.select_ipt');



var hgs = document.querySelector('.hgs');
var Cockpit = document.querySelector('.Cockpit');
var Takeoff = document.querySelector('.Takeoff');
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




plane_btn1.onclick = function () {
    pos_mark.style.display = 'none'
}
btn2.onclick = function () {
    if(ipt2.value == '' || ipt1.value == '' || ipt3.value == ''){
        alert('Please enter the departure and destination')
        return
    }else {
        cf.innerHTML = ipt1.value
        da.innerHTML = ipt2.value
        Takeoff.innerHTML = ipt3.value
        pos_mark.style.display = 'flex'
    }

}
plane_btn2.onclick = function () {
    planeTicket.style.display = 'none'
    userInfor.style.display = 'block'
}

var bottom_btn = document.querySelector(".bottom_btn");

bottom_btn.onclick = function () {
    pos_mark.style.display = 'none'
    planeTicket.style.display = 'block'
    userInfor.style.display = 'none'
    alert('Purchase successful')
}
