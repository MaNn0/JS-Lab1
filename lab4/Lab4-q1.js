var slide = document.getElementById("image");
slide.addEventListener("mouseover", setimg);
slide.addEventListener("mouseout", mouseOut);
let i = 1
function mouseOver(){
     slide.src = `./Untitled${i++}.jpeg`;
     if(i === 6) i = 1;
 };
 var yes;
 function setimg(){
     yes = setInterval(mouseOver,1000)
 }
 function mouseOut(){
     clearInterval(yes)
     i=1
     slide.src = `./Untitled1.jpeg`;
 }
