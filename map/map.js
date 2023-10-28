// // //  Método Map//  
// // // Map  serve para pecorrer um array por completo , ela visita cada inte do array

// // //No map(n,i) temos os seguintes parâmetros(map(n,i)) onde (n )é o elemento do array , e (i) é o indice
// // let cores = ['azul','branco', 'verde'];

// // cores.map((cor,i)=>{
// //      console.log(cor,i)

// // })


// // // Exemplo usamos map para fazer operaçõe aritméticas//
// // let mult = [0,1,2,3,4,5,6,7,8,9,10];

// // mult.map((n ,i)=>{
// //     console.log(`2 * ${i}= ${n*2}`)
// // })

// // //Podemos usar o return no Map//

// // let h1 = ['carro','moto', 'navio'];

// // let res = h1.map((n,i)=>{
// //     return `<h1>${n}</h1> ${i}`
// // });
// // console.log(res);

// //Usando map com elementos html
// let div = document.querySelectorAll('div');
// let h =  document.querySelectorAll('#h1');
// let p =  document.querySelector('#h1');
// let h2 =  document.querySelector('#h1');

// // como div não é uma coleção interavel temos que torna ela interavel com o espalhador spread//

// div=[...div];// Aqui estamos transformando em interavel com o espalhamento do sspread//

// div.map((e,i)=>{
//     console.log(e.innerHTML)
// })

// // Usando map para operar os elementos//

// let converterInt=(e)=>parseInt(e);
// let dobrar=(e)=>e*2;// isso é mesma coisa de fazer asssim  let dobrar = (e)=>{
//                                                          //    return e*2;
//                                                         //    }          

// let n = ['1','2','5','5'].map(dobrar); // aqui estamos usando  o  map  para converte as strings em numero dos elementos do array
// console.log(n);
// //poderiamos usar para dobras os numeros//

// // outro método de converte colection html  em  array,para serem  mapeadas//
// let divs = document.querySelectorAll('div');

// let res = Array.prototype.map.call(divs,({innerHTML})=>innerHTML)
// console.log(res[1])

// // Usando Array.from para fazer a converção da Nodelist

// let from = document.querySelectorAll('div');

// let resultFrom= Array.from(from);

// resultFrom.map((e,i)=>{
//     console.log(e.innerText)
// })

//exercico  o numero ao quadrado//


const numbers = [1, 2, 3, 4, 5];

const res = numbers.map((e)=>{
    return e*=e
})
console.log(res)


// exercico letras maiuscula//
const nomes = ["ana", "joão", "maria", "carlos"];

// Sua função aqui
let upCase = nomes.map((e)=>{
    return e.toUpperCase();
})

console.log(upCase);

//filtrar os numeros pares//

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numePares = numeros.filter((e)=>{
         return e % 2 == 0;
})
console.log(numePares);

