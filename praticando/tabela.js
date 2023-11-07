
let n1 = document.getElementsByClassName('nota');
let n2 = document.getElementsByClassName('medianum')[0];// acessando o item do html(colection sem loop)
console.log(n2)
let input = document.querySelector('input');
let input1 = document.querySelector('.valor');
let table =[...document.querySelectorAll('table')]
let clear = document.querySelector('.clear')
let valordigitado;
let valor1;
let valor2;

table.map((e)=>{
  e.addEventListener('click', (ele)=>{
    ele.stopPropagation()    // aplicamos o stopPropagation para parar o evento ao clicar no elemento table isso resolveu o prblema de ficar  aparecendo NaN ao selecionar o campo para passar os valores/
  })
})
clear.addEventListener('click',()=>{
 input.value=''
 input1.value='' 
})
let button = document.addEventListener('click',  calc=()=>{
  valor1=parseFloat( input.value );
  valor2 =parseFloat(input1.value);
  valordigitado = valor1 + valor2
  let media=valordigitado / 2

 n2.innerHTML = media.toFixed(1)
})

let media = 0;
