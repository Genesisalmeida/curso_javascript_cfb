// // //Desestruturação/
// // // A desestruturação (destructuring) é um recurso do JavaScript que permite extrair valores de arrays ou propriedades de objetos de uma forma mais prática e legível. Vamos analisar os exemplos que você trouxe e entender onde e por que usar.
// // let a,b,c,d;

// // [ a,b,c,d] = [10,22,33,66];

// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);


// // let nome,idade;

// // ({nome,idade}={nome:'binho',idade:24});
// // console.log(nome);
// // console.log(idade);

// // //como desestruturar um array

// // let numb= [10,22,33,55]
// // let [g,h,t,y]=numb

// // console.log()

// //roca de valores entre variáveis sem variável auxiliar:

// // let x = 25;
// // let f = 50;

// // [x,f]=[f,x]

// // console.log(x)
// // console.log(f)

// let media = (a,b,c)=>{
//     return ( (a+b+c)/3).toFixed(2)
// }
// const notas = [5.5,7,8.4]

// let [n1,n2,n3]=notas

// let result = media(n1,n2,n3)

// console.log(`A média do aluno é ${result}`)

// // Desafio 2 - Desestruturação de Objetos
// // Dado um objeto que representa um produto, seu objetivo é:

// // Desestruturar o objeto para obter o nome, preco e estoque.
// // Exibir essas informações no console.

// const produto = {
//     nome: "Teclado Mecânico",
//     preco: 250.00,
//     estoque: 30
// };


// let{nome,preco,estoque}=produto
// console.log(nome)
// console.log(preco)
// console.log(estoque)

// function exibirUsuario({nome,idade}) {
//     // Desestruture o objeto dentro do parâmetro
//     console.log(`Nome: ${nome}, Idade: ${idade}`);
// }

// // Teste a função com o seguinte objeto:
// const usuario1 = { nome: "Carlos", idade: 28 };
// exibirUsuario(usuario1);

// //aula 2 desestruturação//

// const cores = ()=>{
//     return ['verd','amrelo','azul','red']
// }

// let [c1,c2,,c3]=cores() //adicionando mais uma virgula para adicionar 'red' no c3

// console.log(c1)
// console.log(c2)
// console.log(c3)


// const h1  = document.querySelector('.t');

// let text = 'aula de javascript';
// let t = [...text]; // Spread é desnecessário aqui, basta usar text direto.

// const frase = (text, ele, veloci) => {
//     let index = 0;
//     const interval = setInterval(() => {
//         if (index < text.length) {
//             ele.textContent += text[index];
//             index++;
//         } else {
//             clearInterval(interval)
//         }
//     }, veloci);
// };

// frase(text, h1, 1000);{

   
// }

// let con = ''
// let r = 'genesis'
// let e = 0
// function frases(){
//    setTimeout(()=>{
//     if(e < r.length){
//       con += r[e] 
//       e++ ;
//       console.log(con)
//       frases()
//     }
// },500)
// }
// console.log(frases())



// let arma = '';
// let text = 'jesusteama';

// let index = text.length - 1; // Começa do último caractere

// const frase = () => {
//     if (index >= 0) { // Continua enquanto houver caracteres para exibir
//         setTimeout(() => {
//             arma += text[index]; // Concatena o caractere atual
//             console.log(arma); // Exibe o progresso no console
//             index--; // Anda para trás na string
//             frase(); // Chama novamente até terminar
//         }, 1000);
//     }
// };

// frase();

const h1  = document.querySelector('.t');
let text2 = 'Ola jesus é bom o tempo todo'


let frase = (text,h1)=>{
    let index = 0;
    h1.textContent='';
   let intervalo = setInterval(()=>{
        if(index<text.length){
            h1.textContent += text[index];
            h1.style.color=corAleatoria();
            index++;
        }else{
            clearInterval(intervalo);
        }
    },500);
}
frase(text2,h1);

function corAleatoria() {

    const r = Math.floor(Math.random() * 256); // Valor de 0 a 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; // Retorna a cor no formato RGB
  
  };