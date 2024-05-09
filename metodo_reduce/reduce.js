//método reduce//

//O método reduce() em JavaScript é uma maneira poderosa de transformar uma matriz (array) em um único valor.  basicamente, o reduce reduz uma array para um único valor.

// no exemplo amostrado, é somado o valor acumulado com o valor atual

// o parametro "anterior" que o professor apresentou, de maneira mais clara, é o valor "acumulado",  ou seja, o valor que está sendo acumulado para retornar
// acumulador: O valor acumulado durante o processo de redução. Inicializado com o valor inicial passado como segundo argumento para reduce(), que é 0 neste caso.
// valorAtual: O valor atual sendo processado no array.
// A função de callback (acumulador, valorAtual) => acumulador + valorAtual é aplicada a cada elemento do array. Ela adiciona o valorAtual ao acumulador.
// No final, o método reduce() retorna o valor acumulado, que é a soma de todos os elementos do array.
// // O método reduce() também pode ser usado para outras operações, como encontrar o valor máximo ou mínimo em um array, concatenar strings, contar elementos que atendem a uma condição, entre outros. Ele é uma ferramenta poderosa para trabalhar com arrays em JavaScript.




const divArray = document.querySelector("#array");
const button = document.querySelector("#btnPesquisar");
const box_result = document.querySelector("#resultado")
const elemento = [2,2,5,16,19,11];
divArray.innerHTML=` [${elemento}]`;
let aux = [] //

button.addEventListener('click',()=>{
 const res =  elemento.reduce((acumulado,valoratual)=>{ // o acumulado é o retorno da operação, ou seja 2 , 4 , 9 .. assim ele vai guardando os valores a cada interação//
    
        console.log(acumulado)
        return acumulado + valoratual;
    });
        box_result.innerHTML=`a soma dos valore do array é: ${res}`;
},0);//  é o valor inicial do acumulador. Isso significa que a soma começará a partir de 0.