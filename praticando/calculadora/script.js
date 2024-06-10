const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const calculadora = document.querySelector('.calc')
const display = document.querySelector('.display');
const tcopy = document.querySelector('#tcopy');
const clear = document.querySelector('#limpar');
const teclaIgual = document.querySelector('#tigual');
const teste = document.querySelector('#teste');
const gavetaon = document.querySelector('.gavetaon')


let sinal = false;
let decimal = false;

//teclas numericas
teclasNum.map((elemen)=>{
  elemen.addEventListener('click',(evt)=>{
     sinal=false;
     if(evt.target.innerHTML==','){
        if(!decimal){
          decimal=true;
          if(display.innerHTML=='0'){
              display.innerHTML='0,';
          }else{
            display.innerHTML+=evt.target.innerHTML;
          };
          
      };
    }else{
        if(display.innerHTML=='0'){
            display.innerHTML='';
        };
        display.innerHTML+=evt.target.innerHTML;
    };

  });
});
//teclas operações//
teclasOp.map((elemen)=>{
    elemen.addEventListener('click',(evt)=>{
      if(!sinal){
        sinal=true
        if(display.innerHTML=='0'){
           display.innerHTML=''
        };
        if(evt.target.innerHTML=='x'){
            display.innerHTML+='*'
        }else{
            display.innerHTML+=evt.target.innerHTML
        };
        
      };
      
    });
  });
 //zerando o display// 
clear.addEventListener('click',()=>{
      sinal=false;
      decimal = false;
      display.innerHTML="";
})  ;

//tecla operação//

teclaIgual.addEventListener('click',()=>{
  sinal=false;
  decimal = false;
    const res = eval(display.innerHTML)
      if(res!=undefined){
          display.innerHTML = res   // eval A função Eval avalia o expressão de cadeia de caracteres e retorna seu valor. Por exemplo, Eval("1 + 1") retorna 2. Se você passar para a função Eval uma cadeia de caracteres que contém o nome de uma função, a função Eval retornará o valor retornado da função.
      }else{
        alert('digite valores válidos')
      } ;
});

//copiar para area de transferência//

tcopy.addEventListener('click',(evt)=>{
    //navigator.clipboard.writeText(display.innerHTML);~
    teste.select(); // Bom usar o select antes ,principalmente em dispositivos mobile
    navigator.clipboard.writeText(teste.value)
});



gavetaon.addEventListener('click',(evt)=>{
  const delay = 500
  setTimeout(()=>{
       gavetaon.classList.toggle('gavetaof') 
    if(calculadora.style.display =='flex')
      calculadora.style.display='none'
    else{
      calculadora.style.display= 'flex'
    }
  },delay)

    
})
