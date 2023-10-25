
let n1 = document.getElementsByClassName('nota');
let n2 = document.getElementsByClassName('medianum')[0];// acessando o item do html(colection sem loop)
let input = document.querySelector('input');
let input1 = document.querySelector('.valor')
let valordigitado;
let valor1;
let valor2;

 valordigitado = valor1+ valor2
let button = document.addEventListener('click',  calc=()=>{
  valor1=parseFloat( input.value );
  valor2 =parseFloat(input1.value);
  valordigitado = valor1 + valor2
  let media=valordigitado / 2

 n2.innerHTML = media.toFixed(1)
})

let media = 0;
