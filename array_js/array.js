//array em javacript/

const div = document.querySelector('.box');
const cursos = ['java','php','html'];
cursos[0]='c++'// aqui  estamos alterando õ valor pela  posição '[0]' do array;
// push() é usado para adicionar no final do array
// pop() serve para reirar elemento do array,ele retirar ultimo elemento do array
//unshift() adiciona no inicio do array 
//shift () retira do inicio

cursos.push('elétrica')
cursos.pop()//o curso 'eletrica' foi retirado,se adicionar outro pop o html sera retirado e assim sucessivamente
cursos.map((ele)=>{
    const p = document.createElement('p');
    p.innerHTML = ele;

  div.append(p);
})
 // array  dentro do array//
const carros = ['fiat','chevrolet','renolt'];
const cores = ['verde','azul','branco',carros];


//acessando array  dentro do array

console.log(cores[3][1]) // aqui sera imprimido o valor 'chevrolet';

//Populando array com função javascript//

let array = ()=>{

}

