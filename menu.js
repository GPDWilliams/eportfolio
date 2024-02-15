//var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
//document.getElementById("menubox").offsetTop;

var origY = 0; 

function sbar() {
window.status = ''; 
}

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

function goto(x, y) {

window.scrollTo({
  top: y,
  left: x,
  behavior: "smooth",
});

}

function goto2(element) {
height_top=95;
//height_element=document.getElementById(element).offsetHeight;
x=0;
y=document.getElementById(element).offsetTop - height_top;

window.scrollTo({
  top: y,
  left: x,
  behavior: "smooth",
});

}



