var myIndex = 0;

//  schimba imaginile la 3 secunde;
(function slideShow() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
       
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideShow, 3000);
})();

// sticky navbar;


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}