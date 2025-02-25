const car = document.querySelector('.carro')
const btn_di = document.querySelector('#bt_dire')
const btn_esq = document.querySelector('#bt_esq')   
let cont = 1
const init= ()=>{
    car.style=`position:relative;left:0px`;
   
}
  btn_di.addEventListener('click',()=>{

    let pos =parseInt(car.style.left)
    pos+=10
    car.style=`position:relative;left:${pos}px`

        
    })  
    btn_esq.addEventListener('click',()=>{
        car.style.left = parseInt(car.style.left)-10 +"px"
    })

 window.onload=init