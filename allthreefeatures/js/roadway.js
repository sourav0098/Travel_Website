window.onload = function(){
    var imgElt1 = document.getElementById("img1");
    var imgArr1 = ["img/b2.jpg","img/d2.jpg","img/h2.jpg","img/m2.jpg","img/u2.jpg","img/b3.jpg"]
    var index1 = 0;
    setInterval(function(){
        index1++;
        if(index1>=imgArr1.length){
            index1=0;
        }
        imgElt1.src = imgArr1[index1];
    },3000);

    var imgElt2 = document.getElementById("img2");
    var imgArr2 = ["img/b4.jpg","img/d3.jpg","img/h3.jpg","img/m3.jpg","img/u3.jpg","img/d1.jpg"]
    var index2 = 0;
    setInterval(function(){
        index2++;
        if(index2>=imgArr2.length){
            index2=0;
        }
        imgElt2.src = imgArr2[index2];
    },3000);

}