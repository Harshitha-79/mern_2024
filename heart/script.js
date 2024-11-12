const bodyEl = document.querySelector("body")
bodyEl.addEventListener("mousemove",(event)=>{
    const Xpos =event.offsetX
    const Ypos =event.offsetY
    const spanel =document.createElement("span");
    spanel.style.left = Xpos + "px"
    spanel.style.top = Ypos + "px"
    const size =Math.random()*100;
    spanel.style.width =size +"px";
    spanel.style.height =size +"px";
    bodyEl.appendChild(spanel);

    setTimeout(()=>{
        spanel.remove();

    },3000);

});