var slideItem = 0;
window.onload = function() {
    setInterval(passarSlide, 5000);
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for(let item of objs) {
        item.style.width = slidewidth;
    }
}
function passarSlide() {
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    
    if(slideItem >= 3) {
        slideItem = 0;
    } else{
        slideItem++;
    }
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}