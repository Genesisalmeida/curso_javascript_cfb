//método reduce//

//O método reduce() em JavaScript é uma maneira poderosa de transformar uma matriz (array) em um único valor.  basicamente, o reduce reduz uma array para um único valor.

// no exemplo amostrado, é somado o valor acumulado com o valor atual

// o parametro "anterior" que o professor apresentou, de maneira mais clara, é o valor "acumulado",  ou seja, o valor que está sendo acumulado para retornar




const divArray = document.querySelector("#array");
const button = document.querySelector("#btnPesquisar");
const box_result = document.querySelector("#resultado")
const elemento = [2,2,5,16,19,11];
divArray.innerHTML=` [${elemento}]`;
let aux = [] //

button.addEventListener('click',()=>{
 const res =  elemento.reduce((acumulado, atual)=>{ // o acumulado é o retorno da operação, ou seja 2 , 4 , 9 .. assim ele vai guardando os valores a cada interação//
        return acumulado + atual;
    });
        box_result.innerHTML=`a soma dos valore do array é: ${res}`;
});