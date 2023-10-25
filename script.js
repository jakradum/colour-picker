var color1=document.querySelector(".Colour-1");
var color2=document.querySelector(".Colour-2");
var h31=document.getElementById("hex1");
var h32=document.getElementById("hex2");
var body=document.getElementById("body");
color1.addEventListener("input",function() {
    h31.innerHTML=color1.value;
    body.style.background="linear-gradient("+color1.value+", "+color2.value+")";
})
color2.addEventListener("input",function() {
    h32.innerHTML=color2.value;
    body.style.background="linear-gradient("+color1.value+", "+color2.value+")";
})