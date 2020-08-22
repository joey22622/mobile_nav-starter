/* 
===================================== 
    HAMBURGER ICON TOGGLE
=====================================
*/

var hamburger = document.querySelector(".nav-button");
var header = document.querySelector("header");

hamburger.onclick = function(e){
    e.preventDefault()
    if(header.classList.contains("active")){
        header.classList.remove("active");
    } else {
        header.classList.add("active");
    } 

}

// END - HAMBURGER ICON TOGGLE