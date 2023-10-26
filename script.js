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
var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
function generateHex1() {
    var numbers="0123456789ABCDEF";
    let hash='#';
    for(let i=0;i<6;i++){
        var randomHex1= hash+=numbers[ Math.floor( Math.random()*16)];
        }
        body.style.background="linear-gradient("+randomHex1+", "+color2.value+")";
        h31.innerHTML=randomHex1;
        color1.value=randomHex1;
    }
b1.addEventListener("click", generateHex1);
function generateHex2() {
    var numbers="0123456789ABCDEF";
    let hash='#';
    for(let i=0;i<6;i++){
        var randomHex2= hash+=numbers[ Math.floor( Math.random()*16)];
        }
        body.style.background="linear-gradient("+color1.value+", "+randomHex2+")";
        h32.innerHTML=randomHex2;
        color2.value=randomHex2;
    }
b2.addEventListener("click", generateHex2);