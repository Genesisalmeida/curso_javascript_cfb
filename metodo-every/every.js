// //Método Every//
// const numero = [20,5,14,66,4];

// const maiorqueDez = numero.every((n)=>{
//     n>10;
   
// })
// console.log(maiorqueDez) // o retorno  será false , pois nem todos osnumeros são mairores que 10,então o every  retorna um boleano 'true' ou 'false';//

const divArray = document.querySelector("#array");
const button = document.querySelector("#btnPesquisar");
const box_result = document.querySelector("#resultado")
const elemento = [33,6,41,23,14];
divArray.innerHTML=` [${elemento}]`;
button.addEventListener('click',(evt)=>{
    const array = ''
    const ret =  elemento.every((n,i)=>{
        if(n<18){
            box_result.innerHTML='Não conforme na posição' + i
         }
          return n>=18 
   
    })
    if(ret){//Então, após a execução do método every, a variável ret conterá true se todos os elementos do array forem maiores ou iguais a 18, e false se pelo menos um elemento for menor que 18. Em seguida, o if (ret) verifica o valor de ret. Se for true, isso significa que todos os elementos são maiores ou iguais a 18, então exibimos a mensagem "Array ok" na box_result. Se for false, isso significa que pelo menos um elemento é menor que 18, então a mensagem correspondente já foi exibida dentro da função de callback do every, e não precisamos fazer mais nada.
        box_result.innerHTML='Array ok'
    }
})

