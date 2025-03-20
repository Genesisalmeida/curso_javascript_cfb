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
const btn_meio = document.querySelector('#bt_meio');
const btn_play = document.querySelector('#bt_play')   
let anima = null;
let tamax = null;
let tamcar = null;
let dire = 0;
let corCar = null 

function init() {
  car.style.position = "relative";
  car.style.left = "0px";
  car.style.width = "100px";
  car.style.height ="100px"
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
  tamcar=null

});

btn_play.addEventListener('click',()=>{
      clearTimeout(anima)
       autocar()
}) 


// Evento de redimensionamento da tela
window.addEventListener("resize", () => {
  tamax = window.innerWidth - car.offsetWidth;
});

// Inicialização ao carregar a página
window.onload = init;



//funçaõ automatizando o movimento
const autocar = ()=>{
  if(parseInt(car.style.left)<= 0){
    dire = 1;
  }else if(parseInt(car.style.left) >= tamax){
    dire = -1;
  }
  car.style.left = parseInt(car.style.left) + (10 * dire) + "px"; 
 car.style.backgroundColor = corAleatoria() //mudando a cor 
 
 //anima=setTimeout(autocar,200)
  
}
btn_play.addEventListener('click',()=>{
  clearInterval(anima)
  anima=setInterval(autocar,200)
  
   
}) 
// função para mudar a cor
function corAleatoria() {

  const r = Math.floor(Math.random() * 256); // Valor de 0 a 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`; // Retorna a cor no formato RGB

}
car.style.transition = "background-color 0,8s ease-in-out"; // Transição suave de 1 segundo

// mudando tamanho do carro

window.addEventListener("keydown",(evt)=>{
  if(evt.code==='ArrowUp'){
    car.style.width = parseInt(car.style.width=`${tamcar +10}px`)
    car.style.width = parseInt(car.style.height=`${tamcar +10}px`)
    car.style.backgroundColor = corAleatoria() 
  }
   if(evt.code==='ArrowDown'){
    car.style.width = parseInt(car.style.width=`${tamcar - 10}px`)
    car.style.width = parseInt(car.style.height=`${tamcar - 10}px`)
    car.style.backgroundColor = corAleatoria() 
  }
  tamcar=parseInt(car.style.width)
  tamax = window.innerWidth - car.offsetWidth;
})