window.onload = function(){
    var img1 = document.getElementById("img1");
    var imgArr1 = ["img/b1.jpg","img/b2.jpg","img/b3.jpg","img/b4.jpg"]
    var index1 = 0;
    setInterval(function(){
        index1++;
        if(index1>=imgArr1.length){
            index1=0;
        }
        img1.src = imgArr1[index1];
    },2000);

    var img2 = document.getElementById("img2");
    var imgArr2 = ["img/d1.jpg","img/d2.jpg","img/d3.jpg","img/d4.jpg","img/d5.jpg"]
    var index2 = 0;
    setInterval(function(){
        index2++;
        if(index2>=imgArr2.length){
            index2=0;
        }
        img2.src = imgArr2[index2];
    },2000);

    var img3 = document.getElementById("img3");
    var imgArr3 = ["img/h1.jpg","img/h2.jpg","img/h3.jpg","img/h4.jpg"]
    var index3 = 0;
    setInterval(function(){
        index3++;
        if(index3>=imgArr3.length){
            index3=0;
        }
        img3.src = imgArr3[index3];
    },2000);

    var img4 = document.getElementById("img4");
    var imgArr4 = ["img/m1.jpg","img/m2.jpg","img/m3.jpg","img/m4.jpg"]
    var index4 = 0;
    setInterval(function(){
        index4++;
        if(index4>=imgArr4.length){
            index4=0;
        }
        img4.src = imgArr4[index4];
    },2000);

    var img5 = document.getElementById("img5");
    var imgArr5 = ["img/u1.jpg","img/u2.jpg","img/u3.jpg","img/u4.jpg"]
    var index5 = 0;
    setInterval(function(){
        index5++;
        if(index5>=imgArr5.length){
            index5=0;
        }
        img5.src = imgArr5[index5];
    },2000);
}

