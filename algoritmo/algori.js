// const anoAtual= Number(prompt('Digite o  ano atual'))
// const anoNaci= Number(prompt('Digite o  ano que voçê naceu'))

// const calcIdad = anoAtual - anoNaci
// console.log(calcIdad)

// if(calcIdad >= 18){
//     alert(`Sua idade é ${calcIdad} anos voçê esta apto para dirigir`)
// }else{
//     alert(`Sua idade é ${calcIdad} anos voçê não esta apto para dirigir`)
// }

// Condicionais


// let soma  = 0
// let maior = 0
// let menor = Infinity
// let g = ''
// let i =0
// do{
//     let n = Number(prompt('Digite um número'))

//     if(n > maior){
//         maior = n
//     } 
//     if(n < menor) {
//         menor = n 
//     }
    
//     soma += n
//     console.log(`Número digitado: ${n}`)
//     g = prompt('Quer continuar?')
    
//   } 
// while(g=='sim') 


// // for(let i = 0; i < 3; i++){  
// //     let n = Number(prompt('Digite um número'))

// //     if(n > maior){
// //         maior = n
// //     } 
// //     if(n < menor) {
// //         menor = n 
// //     }
    
// //     soma += n
// //     console.log(`Número digitado: ${n}`)
// // }

// console.log('O maior número digitado foi:', maior)
// console.log('A soma dos valores é:', soma)
// console.log('O menor número digitado foi:', menor)
// console.log('Fim  da exercução!')

// let n =0
// do{
// console.log(`${n} + 2 = ${n + 2}`)
//     n++
// }while(n<10)


// fatorial 

// let  nu = Number(prompt('Digite um  numero'))
// let fatorial= 1 

// do {
//     console.log(`${nu}`)
//     fatorial*= nu 
//     nu--
// }while(nu>=1)
// console.log(`fatorial de ${fatorial}`)

// numeros pares 
// let n = 20

// for(let i = 0; i<=n; i++){
//     if(i % 2 == 0){
//         console.log(i + " par")
//     }else{
//         console.log(i + " impar")
//     }

// }

// 

// let quati = 0
// let somImpar = 0

// for(let  i = 1; i<=5; i++){
//   let n = Number(prompt('digite um  valor')) 
//   if(n >= 0 && n <=10){
//     console.log(`Os valores ${n} estao entre 0 a 10`)
//     quati+=1
//   }if(n % 2 !=0){
//     somImpar+=n
//     console.log(`Os valores ${n} sao impar`)
//   }
// }

// console.log(`A quantidade de numeros entre 0 e 10 é: ${quati}`)
// console.log(`A soma dos valore impares digitados é: ${somImpar}`)


 // combinações
//    let p = 0
  
//  for(let i = 1 ; i <= 3; i++){
//     for(let c = 1 ; c<= 3; c++ ){
//         console.log(`${i} ${c}`)
//     }

//  }

//  // fibonaci 

// let fibonaci = [0,1]
//  let n = 10000000

//  for(let i = 2 ; i < n; i++ ){
//    fibonaci[i] = fibonaci[i-1] + fibonaci[i-2]
//  }

//  console.log(fibonaci)

// analisando valores
// let soma = 0;
// let media = 0
// let Divcinco = 0
// let n = 3
// let somaDopares = 0
// let quantNulo = 0
// for(let i = 0; i < n; i++){
//       var val =Number(prompt('Digite alguns valores'))
//       console.log(val)
//    if(val%5 == 0){
//       Divcinco+=1
//    } if(val== 0 ){
//       quantNulo += 1
//    }if(val% 2 ==0){
//       somaDopares+=val
//    }
   
//    soma += val
//    media = soma / n
// }
// console.log('A soma dos valores digitados são ', + soma)
// console.log('A quantidade de numeros nulos são ', + quantNulo)
// console.log('A quantidade de numeros divisiveis por 5 são: ', + Divcinco)
// console.log('A média dos valores digitados são ',media)
// console.log('A soma dos numeros pares são ', +somaDopares)

let fi = [0,1]
let n = 4
for(let i = 2; i < n; i++){
   fi[i]= fi[i-1] + fi[i-2]
}
console.log(fi)