const box =document.querySelector('.box')
const circulo = [...document.querySelectorAll('.circulo')]

 let posx_mause =0;
let posy_mause = 0;

window.addEventListener("mousemove",(evt)=>{
   posx_mause = evt.clientX
   posy_mause = evt.clientY
   const rot = Math.atan2(posx_mause,posy_mause) * 180/Math.PI
   circulo.map((o)=>{
        o.style.transform="rotate("+rot+"deg)"
    })
   
})
