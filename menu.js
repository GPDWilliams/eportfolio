//var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
//document.getElementById("menubox").offsetTop;

var origY = 0; 

function showMenu() {
//debugger;
origY = document.getElementById("menubox").offsetTop;
var posY=0;
var newPos=0;

//alert(origY);
newPos = parseInt(origY + window.scrollY);
//alert(newPos);

//document.getElementById("menubox").style.top = newPos;
document.getElementById("menubox").style.zIndex = "5";
}

function hideMenu() {
document.getElementById("menubox").style.top = origY;
document.getElementById("menubox").style.zIndex = "-1";
}

