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



// // fuction
// let maior = 0;
// let p = 0;
// let nome = '';  // Inicia a variável nome como uma string vazia

// const maiorPeso = () => {
//    for (let i = 0; i < 2; i++) {  // A quantidade de vezes que o loop vai rodar (aqui, é 2)
//       let nomePessoa = prompt('Digite nome:');  // Armazenando o nome da pessoa
//       let peso = Number(prompt('Digite seu peso:'));  // Lendo o peso da pessoa e convertendo para número

//       // Verifica se o peso é maior que o peso registrado
//       if (peso > p) {
//          p = peso;  // Atualiza o maior peso
//          nome = nomePessoa;  // Atualiza o nome com a pessoa que tem o maior peso
//       }
//    }
// };

// maiorPeso();  // Chama a função para rodar o processo

// console.log(`O maior peso contabilizado foi de ${nome} com o valor de ${p}kg.`);


// // 


// function parImpar(n){
//    if(n%2==0){
//       console.log('Numero digitado é par ');
//    }else{
//       console.log('Numero digitado é Impar');
//    }
// }

// const v = Number(prompt('Digite um valor'));

// parImpar(v);

// fibonacci
// let fib = [0,1];

// function fibonacci(n,val){
//    for(let i = 2; i < val ; i++){
// //       n[i] = n[i-1] + n[i-2]
     
// //    }
// //    return n
   
// // }
// // console.log(fibonacci(fib,100))

// function parImáp(n){
// //
//     return n%2 == 0? ` O numero ${n} é par!`:`Numero ${n} é impar!` 
// //  
// }
// function fibonacci(){
    
//     const fib = [0,1];
//     for(let i = 2; i<10; i++){
//         fib[i] = fib[i-1] + fib[i-2]
        
//     }
//     return fib[fib.length - 1]
    
// }
// console.log(parImáp(fibonacci()));

// function fatori (n){
//     let fatorial = 1 ;
//     for(let i = n ; i>1; i--){
//         fatorial*= i
//     }
//     return fatorial

// }
// console.log(fatori(100))
// let vetor = [15,54,7,8,9,10]

// for(let i = 0; i<vetor.length; i++){
//     if(vetor[i]%2==0){
//         console.log(`O numero ${vetor[i]} é par e eta na posiçaõ ${i}`)
//     }else{
//         console.log(`O numero ${vetor[i]} é impar esta na posiçaõ ${i}`)
//     }
// }

// console.log(vetor)

// //listagem de alunos
// let nomeAlunos = [];
// let idadeAlunos = [];
// let continuar = prompt('Bom dia! Quer continuar? "sim" ou "não" ');

// while (continuar === 'sim') {
//     let nome = prompt('Digite o nome de um aluno:');
//     let idade = Number(prompt('Digite a idade do aluno:'));

//     nomeAlunos.push(nome);
//     idadeAlunos.push(idade);

//     continuar = prompt('Quer continuar? "sim" ou "não" ');
// }

// console.log('Nomes dos alunos:', nomeAlunos);
// console.log('Idades dos alunos:', idadeAlunos);

//

// let nome = []
// let somar = 0
// for(let i = 0; i<4; i++){
//     let v = prompt('Digites nomes ')
//     nome.push(v)
// }

//     let  letra = 'c'
//  const bucar = nome.filter((ele)=>{
//    return ele.startsWith(letra)
    
//  })

//     console.log(bucar)

const v = [4, 2, 8, 9, 7, 6, 3, -1];

function bubbleSort(arr){
    for(let i =0; i<arr.length; i++){
        for(let j = 0 ; j<arr.length; j++){
            if(arr[j]>arr[j + 1]){                                  
              let aux= arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] =aux
            }
        }
    }
    return arr
}


console.log(bubbleSort(v));  // Exibe o array ordenado

function bubooSoft(arr){
   for(let i = 0; i<arr.length ; i++){
        for(let j = 0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
               let aux = 0
               aux = arr[j]
               arr[j] = arr[j+1]
               arr[j+1]=aux     
            }
        }
   }

  }
 console.log(bubbleSort(v))

 const fib = [0,1]

 for(let i = 2; i<5; i++){
    fib[i] = fib[i -1] + fib[i-2]

 }
 console.log(fib)

let d = [9,8,7,6,5,4,3,2,1]

for(let i = 0; i<d.length; i++){
        for(let j = 0 ; j<d.length; j++){
            if(d[j]> d[j+1]){
                let tem = 0
                tem = d[j]
                d[j] = d[j+1]
                d[j+1] = tem
            }
        }
}

console.log(d)