window.onload = function(){
    var imgElt1 = document.getElementById("img1");
    var imgArr1 = ["./images/b2.jpg","./images/d2.jpg","./images/h2.jpg","./images/m2.jpg","./images/u2.jpg","./images/b3.jpg"]
    var index1 = 0;
    setInterval(function(){
        index1++;
        if(index1>=imgArr1.length){
            index1=0;
        }
        imgElt1.src = imgArr1[index1];
    },3000);

    var imgElt2 = document.getElementById("img2");
    var imgArr2 = ["./images/b4.jpg","./images/d3.jpg","./images/h3.jpg","./images/m3.jpg","./images/u3.jpg","./images/d1.jpg"]
    var index2 = 0;
    setInterval(function(){
        index2++;
        if(index2>=imgArr2.length){
            index2=0;
        }
        imgElt2.src = imgArr2[index2];
    },3000);

}