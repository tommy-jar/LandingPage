$.get("_header.html", contentToInject => {
    $("#header-placeholder").replaceWith(contentToInject);
});
$.get("_footer.html", contentToInject => {
    $("#footer-placeholder").replaceWith(contentToInject);
});

imagenes=["images/img_2.png","images/img_3.png","images/img_1.png"]
izq = document.getElementById("flecha1")
der = document.getElementById("flecha2")
rec = 0;
img = document.getElementById("img1")

izq.addEventListener("click",function (){
    rec--
    if(rec<0 ){
        rec = 2
    }
    img.src = imagenes[rec]
})
der.addEventListener("click",function (){
    rec++
    if(rec>2 ){
        rec = 0
    }
    img.src = imagenes[rec]
})

