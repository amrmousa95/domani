$(function(){
    "use strict";
    // nice scroll
  $("html").niceScroll();

    window.onscroll = function() {myFunction()};

    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

});