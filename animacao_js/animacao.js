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
const btn_meio = document.querySelector('#bt_meio')   
let anima = null;
let tamax = null;

function init() {
  car.style.position = "relative";
  car.style.left = "0px";
  car.style.width = "100px";
  tamax = window.innerWidth - car.offsetWidth;
}

const mover = (dir) => {
  if (dir > 0) {
    if (parseInt(car.style.left) <= tamax) {
      car.style.left = parseInt(car.style.left) + (10 * dir) + "px";
    }
  } else if (dir < 0) {
    if (parseInt(car.style.left) >= 0) {
      car.style.left = parseInt(car.style.left) + (10 * dir) + "px";
    }
  }
};

// Eventos dos botões
btn_di.addEventListener('click', () => {
  clearInterval(anima);
  anima = setInterval(() => mover(1), 20);
});  

btn_esq.addEventListener('click', () => {
  clearInterval(anima);
  anima = setInterval(() => mover(-1), 20);
});

stope.addEventListener('click', () => {
  clearInterval(anima);
});


// Evento de redimensionamento da tela
window.addEventListener("resize", () => {
  tamax = window.innerWidth - car.offsetWidth;
});

// Inicialização ao carregar a página
window.onload = init;

