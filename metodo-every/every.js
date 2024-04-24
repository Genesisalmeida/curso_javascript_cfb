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
    const ret =  elemento.every((n,i)=>{
        if(n<18){
            box_result.innerHTML='Não conforme na posição' +i
         }
         return n>=18
   
    })
    if(ret){
        box_result.innerHTML='Array ok'
    }
})

