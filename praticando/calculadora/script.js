const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const display = document.querySelector('.display');
const tOn = document.querySelector('#tOn');
const clear = document.querySelector('#limpar');
const teclaIgual = document.querySelector('#tigual');
console.log(teclaIgual)

let sinal = false;
let decimal = false

//teclas numericas
teclasNum.map((elemen)=>{
  elemen.addEventListener('click',(evt)=>{
     sinal=false
     if(evt.target.innerHTML==','){
        if(!decimal){
          decimal=true
          if(display.innerHTML=='0'){
              display.innerHTML='0,'
          }else{
            display.innerHTML+=evt.target.innerHTML
          }
          
      }
    }else{
        if(display.innerHTML=='0'){
            display.innerHTML=''
        }
        display.innerHTML+=evt.target.innerHTML
    }  

  });
});
//teclas operações//
teclasOp.map((elemen)=>{
    elemen.addEventListener('click',(evt)=>{
      if(!sinal){
        sinal=true
        if(display.innerHTML=='0'){
           display.innerHTML=''
        }
        if(evt.target.innerHTML=='x'){
            display.innerHTML+='*'
        }else{
            display.innerHTML+=evt.target.innerHTML
        }
        
      }
      
    });
  });
 //zerando o display// 
clear.addEventListener('click',()=>{
      sinal=false
      decimal = false
      display.innerHTML=""
})  

//tecla operação//

teclaIgual.addEventListener('click',()=>{
  sinal=false
  decimal = false
    const res = eval(display.innerHTML)
      if(res!=undefined){
          display.innerHTML = res
      }else{
        alert('digite valores válidos')
      } 
    
    
   // eval A função Eval avalia o expressão de cadeia de caracteres e retorna seu valor. Por exemplo, Eval("1 + 1") retorna 2. Se você passar para a função Eval uma cadeia de caracteres que contém o nome de uma função, a função Eval retornará o valor retornado da função.
  
})  







// botton of,on//
// tOn.addEventListener('click',()=>{
//   display.classList.toggle('teste')
//   display.innerHTML="0"
// })
