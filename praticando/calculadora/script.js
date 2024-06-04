const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const display = document.querySelector('.display');
const tOn = document.querySelector('#tOn');
const clear = document.querySelector('#limpar');

//teclas numericas
teclasNum.map((elemen)=>{
  elemen.addEventListener('click',(evt)=>{
   display.innerHTML+=evt.target.innerHTML
  });
});

//teclas operações//
teclasOp.map((elemen)=>{
    elemen.addEventListener('click',(evt)=>{
     display.innerHTML+=evt.target.innerHTML
    });
  });

 //zerando o display// 
clear.addEventListener('click',()=>{
      display.innerHTML=""
})  
