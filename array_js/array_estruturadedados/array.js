// const arr1= [0,2,4]
// const arr2 = [-1,-4,8]
// const num = 45

// let arr = arr1.concat(num,41,arr2)

// console.log(arr)
// // inteirando sobre os array

// let f = x => x % 2 == 0 

// const number = [1,5,7,9,4,3,2,55,66,44,77,88]

// let res = number.every(f)

// console.log(res)
// let teste = number.forEach((e)=>{
//  console.log(e % 2==0)   
// })

// let filt = number.filter((e)=>{
    
//     console.log(e % 2 == 0)
//    })

   // array bidimensionais


//    let numeros = [
//     [1,2,3],
//     [2,3,4],
//     [3,4,5],
//     [1,2,3],
//     [2,3,4],
//     [3,4,5],
    
//    ]

//    console.log(numeros[1][0])

//    for(let linhas = 0; linhas<numeros.length; linhas++){
//         for(let colunas = 0; colunas<numeros[linhas].length; colunas++ ){
//            console.log(numeros[linhas][colunas])
//         }
//    }

   // array multidimensionais  

//    let carros = [
//     [
//         ['palio', 'fusca'],
//         ['bmw','gol'],
//     ],
//     [
//         ['monza','marea'],
//         ['l200','hrv'],
//     ],
//     [
//         [1993,2022],
//         [1994,2025]
//     ]
//    ]
// for(let i = 0; i<carros.length; i++){
//     for(let c = 0; c<carros[i].length; c++){
//         for(let ele = 0; ele<carros[i][c].length; ele++){
//             console.log(carros[i][c][ele])
//         }
//     }
// }

// funções de interação

// const parouImpar = (x)=>{
//     return x % 2 === 0 ?true :false
// }
// let numero = [2,2,3,8,9,58,10,13,22,24]
// let ord = numero.sort()
// console.log(ord)
//let res  = numero.map(parouImpar)
//let res  = numero.filter(parouImpar)
//let res = numero.every(parouImpar)O método every percorre o array e retorna true se todos os elementos passarem no teste da função fornecida.
// let res  = numero.some(parouImpar)some(): Retorna true se pelo menos um elemento passa no teste.

//  let res =  numero.forEach((num) => {
//         console.log(`O número ${num} é par? ${parouImpar(num)}`);
//     })

// console.log(res)

// Os métodos mais usados
// Transformação: map(), reduce()
// Filtragem/Busca: filter(), some(), every(), find(), findIndex()
// Iteração: forEach()
// Ordenação e Combinação: sort(), concat()



// 1. @@iterator: O Iterador de Arrays
// Todo array em JavaScript tem um "iterador", que é um objeto especial que permite percorrer os elementos do array passo a passo. Um iterador é como uma "ferramenta" que nos dá o próximo valor do array cada vez que pedimos.

// Para acessar o iterador, usamos o símbolo Symbol.iterator.
// Exemplo de uso do @@iterator:
let arr1 = [10, 20, 30];
let iterator = arr1[Symbol.iterator](); // Acessando o iterador do array

for(let i of iterator){
   console.log(i)
}

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


// Cada vez que chamamos iterator.next(), ele nos dá o próximo valor do array e nos diz se o loop terminou (done: true).

// 2. keys(): Retorna os índices do array
// O método keys() retorna um iterador que percorre todos os índices (números que indicam a posição) dos elementos do array.

// Exemplo de keys():

let arr2 = ['a', 'b', 'c'];
let keysIterator = arr2.keys(); // Pega os índices do array

console.log(keysIterator.next()); // { value: 0, done: false } -> índice 0
console.log(keysIterator.next()); // { value: 1, done: false } -> índice 1
console.log(keysIterator.next()); // { value: 2, done: false } -> índice 2
console.log(keysIterator.next()); // { value: undefined, done: true } -> terminou

// O método values() retorna um iterador que percorre todos os valores do array, na ordem em que aparecem.
// Exemplo de values():
let arr = ['a', 'b', 'c'];
let valuesIterator = arr.values(); // Pega os valores do array

console.log(valuesIterator.next()); // { value: 'a', done: false } -> valor 'a'
console.log(valuesIterator.next()); // { value: 'b', done: false } -> valor 'b'
console.log(valuesIterator.next()); // { value: 'c', done: false } -> valor 'c'
console.log(valuesIterator.next()); // { value: undefined, done: true } -> terminou

// 4. entries(): Retorna pares de índice e valor
// O método entries() retorna um iterador que percorre o array, mas retorna pares de [índice, valor]. Cada elemento é um array que contém o índice e o valor correspondente.

let arr3 = ['a', 'b', 'c'];
let entriesIterator = arr3.entries(); // Pega os pares [índice, valor]

console.log(entriesIterator.next()); // { value: [0, 'a'], done: false } -> índice 0, valor 'a'
console.log(entriesIterator.next()); // { value: [1, 'b'], done: false } -> índice 1, valor 'b'
console.log(entriesIterator.next()); // { value: [2, 'c'], done: false } -> índice 2, valor 'c'
console.log(entriesIterator.next()); // { value: undefined, done: true } -> terminou

// Metodo fill()

// O método fill() em JavaScript é utilizado para preencher todos os elementos de um array com um valor específico, do início ao fim. Ele modifica o array original, substituindo os valores existentes pelo valor que você especificar.

const  nomes = Array(5).fill('binho') //Array(5): Eu estou criando um array com 5 posições. Nesse momento, ele não tem nenhum valor dentro, apenas espaços vazios. Ele está assim:

// .fill('binho'): O método fill() entra em ação. Ele vai pegar todas essas 5 posições vazias e vai preencher cada uma delas com o valor 'binho'. Então o array fica assim:

for(let i of nomes){
   console.log(i)
}


//Metodo sort

const n = [1,2,3,4,5,6,7,8,9,10,11,45,23,58];

console.log(n.reverse())

const copare = n.sort((a,b)=>{
   return a - b
})
console.log(copare)

const Nomes = ['binho', 'fabio ','Ana', 'ana','carla','maria','soraia']

const ord = Nomes.sort((a,b)=>{
 return  a.localeCompare(b)  
})
console.log(ord)


 