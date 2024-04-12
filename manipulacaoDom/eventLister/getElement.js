//Aprendendo o getElementByid//

const h1 =document.getElementById('#h1');    



////Aprendendo o getElementByTagName//

let  div = [...document.getElementsByTagName('div')]; // spred diretamente nos elementos

// div = [...div]; // spred 
// console.log(div);

let pecorre = div.map((e)=>{
    e.innerHTML='Obrigado por tudo meu Deus';
});

/// Aprendendo o getElementoByClassName ////

let h2 = document.getElementsByClassName('h2');
h2[0].innerHTML='red';

//Aprendendo sobre  QuerySelection//

let p = document.querySelector('p'); // pega o primeiro p que ele encontrar;

console.log(p);

let all = document.querySelectorAll('p[class]');// pega todas as tags p do html;// pegamos so elementos p que possui 'class';
console.log(all);



