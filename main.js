//call all the text to animate with the scroll
let sp1 = document.getElementById("sp1");
let sp2 = document.getElementById("sp2");
let sp3 = document.getElementById("sp3");
let sp4 = document.getElementById("sp4");
// scrollbar event
window.addEventListener('scroll',()=>{
     const scroll_value = window.scrollY/window.innerHeight;
     console.log(scroll_value);
     if(scroll_value > .50 && scroll_value < .64){
          sp1.style.color = "white";

     }else if(scroll_value > .65 && scroll_value < .73){
          sp2.style.color = "white";
     }else if(scroll_value > .74 && scroll_value < .81){
          sp3.style.color = "white";
          
     }else if(scroll_value > .82 && scroll_value < .90){
          sp4.style.color = "white";
     }
     else{
          sp1.style.color = "rgba(255,255,255,.5)";
          sp2.style.color = "rgba(255,255,255,.5)";
          sp3.style.color = "rgba(255,255,255,.5)";
          sp4.style.color = "rgba(255,255,255,.5)";
     }
});