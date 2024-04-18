//Exercício 3: Contagem de Vogais

//Crie uma função em JavaScript que recebe uma string como entrada e conta quantas vogais (a, e, i, o, u) estão presentes nessa string.


const contVogais = (array)=>{
  let cont = 0;
  for(let i in array){
    if(array[i]=='a' || array[i]=='e'|| array[i]=='i'|| array[i]=='o'|| array[i]=='u'){
        cont ++ 
    }
     
    }
     return `quantidade string é ${cont}`  
    
};

const palavara= 'bolo';

const res = contVogais(palavara);
console.log(res)
// Soma dos Dígitos

//Escreva uma função que recebe um número inteiro positivo como entrada e retorna a soma de seus dígitos. Por exemplo, se o número de entrada for 12345, a função deve retornar 15 (1 + 2 + 3 + 4 + 5);

let somadigito=(n)=>{
    let soma = 0;
    let convert = n.toString();

    for(let i of convert){
        let res = parseInt(i)
        
        soma+=res
    }
    return soma 
} 
const nuber = 1596;
const result = somadigito(nuber)
console.log(result)

//exercico ordenção array//
let orden = (array1)=>{
    return array1.sort((a, b) => a - b); //O que é Sort em JavaScript O método sort() ordena os elementos do próprio array e retorna o array
}

let n2 = [1,2,5,8,6,10,3,9,4]
console.log(orden(n2));




