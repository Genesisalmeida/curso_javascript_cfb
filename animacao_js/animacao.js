// const car = document.querySelector('.carro');
// const stop = document.querySelector('#stop');  
// const btn_di = document.querySelector('#bt_dire');
// const btn_esq = document.querySelector('#bt_esq');   
// const anima = null
// const init= ()=>{
//     car.style=`position:relative;left:0px`;
   
// }
//   btn_di.addEventListener('click',()=>{
//     setInterval(()=>{

//    }) 
//     let pos =parseInt(car.style.left);
//     pos+=10;
//     car.style.left = `${pos}px`;

//     })  
//     btn_esq.addEventListener('click',()=>{
//         car.style.left = parseInt(car.style.left)-10 +"px";
//     })

//  window.onload=init;

 

//animação automatica 

const car = document.querySelector('.carro');
const stope = document.querySelector('#stop');  
const btn_di = document.querySelector('#bt_dire');
const btn_esq = document.querySelector('#bt_esq');   
let anima = null
const init= ()=>{
    car.style=`position:relative;left:0px`;
}

const mover=(dir)=>{
  car.style.left = parseInt(car.style.left) + (10*dir) +"px";
}

btn_di.addEventListener('click',()=>{
    clearInterval(anima)
       anima = setInterval(mover,200,1)

    })  

btn_esq.addEventListener('click',()=>{
      clearInterval(anima)
       anima = setInterval(mover,200,-1)
    })

stope.addEventListener('click',()=>{
      clearInterval(anima) //limpar intervalo
   
   })

 window.onload=init;