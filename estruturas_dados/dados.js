// PILHAS//

// class Stack {
//     constructor() {
//         this.itens = [] // Inicializa um array vazio para armazenar os elementos da pilha
//     }

//     push(element) {
//         this.itens.push(element) // Adiciona um elemento ao topo da pilha (fim do array)
//     }

//     pop() {
//         this.itens.pop() // Remove e retorna o elemento do topo da pilha (último do array)
//     }

// //     peek() {
// //         return this.itens[this.itens.length - 1] // Retorna o elemento do topo da pilha sem removê-lo
// //     }

// //     isEmpty() {
// //         return this.itens.length === 0 ? 'A pilha esta vazio' : 'A pilha não está vazia' 
// //         // Verifica se a pilha está vazia. Se o comprimento do array for 0, retorna 'vazio'. Caso contrário, 'não está vazia'
// //     }
// //     clear() {
// //         this.itens = [] // Limpa a pilha, removendo todos os elementos (tornando o array vazio)
// //     }
// //     size(){
// //      return   this.itens.length
// //     }
// // }    
// // const e = new Stack()
// // e.push(10)
// // e.push(5)
// // e.push(4)
// // e.push(10)
// // e.push(8)
// // e.pop()
// // console.log(e.isEmpty())
// // console.log(e.size())
// // console.log(e.peek()) // exibe 8

// // //e.clear()
// // console.log(e.itens)

// //Uma classe js baseada em objeto
// class Stack {
//     #itens; // Propriedade privada para armazenar os itens da pilha
//     #cont;  // Propriedade privada para controlar a contagem de elementos

//     constructor() {
//         this.#cont = 0; // Inicializa a contagem de elementos
//         this.#itens = {}; // Inicializa os itens como um objeto vazio
//     }

//     push(element) {
//         this.#itens[this.#cont] = element; // Adiciona o elemento no topo da pilha
//         this.#cont++; // Incrementa a contagem
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "A pilha está vazia"; // Retorna mensagem se a pilha estiver vazia
//         }
//         this.#cont--; // Decrementa a contagem
//         const removed = this.#itens[this.#cont]; // Obtém o elemento removido
//         delete this.#itens[this.#cont]; // Remove o elemento do objeto
//         return removed; // Retorna o elemento removido
//     }

//     size() {
//         return this.#cont; // Retorna o número de elementos na pilha
//     }

//     isEmpty() {
//         return this.#cont === 0; // Verifica se a pilha está vazia
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "A pilha está vazia"; // Retorna mensagem se a pilha estiver vazia
//         }
//         return this.#itens[this.#cont - 1]; // Retorna o elemento no topo sem removê-lo
//     }

//     clear() {
//         this.#itens = {}; // Esvazia os itens
//         this.#cont = 0; // Reinicia a contagem
//     }
// }

// // Exemplo de uso
// let pilha = new Stack();
// pilha.push(10);
// pilha.push(20);
// console.log(pilha.pop());  // 20
// console.log(pilha.size()); // 1
// console.log(pilha.peek()); // 10
// pilha.clear();             // Esvazia a pilha
// console.log(pilha.isEmpty()); // true


// Resolvendo  problemas usando pilha
class Pilha {
    constructor(){
        this.item = []
    }
    push(ele){
        this.item.push(ele)
    }
    isEmpty(){
        return this.item.length === 0
    }
    pop(){
        return this.item.pop();
    }
}
// function decimaBinario(n){
//     const remPilha = new Pilha();
//     let number = n;
//     let rem;
//     let binaryString ='';
//     while(number > 0){
//         rem = Math.floor(number % 2)
//         remPilha.push(rem)
//         number = Math.floor(number / 2)
//         console.log(rem)
//     }
//     while(!remPilha. isEmpty()){
//      binaryString+=remPilha.pop().toString()

//     }
//     return binaryString
   
   
// }

// console.log(decimaBinario(4));

//Conversor de base

function baseConversor(decimal , base){
    const remPilha = new Pilha();
    const digits = '0123456789ABCDEFGHIJKMNOPQRSTUVWXYZ';
    let number = decimal;
    let rem;
    let baseSring = '';
    if(!(base >= 2 && base<= 36)){
        return '';
    }
    while(number > 0){
        rem = Math.floor(number % base);
        remPilha.push(rem);
        number = Math.floor(number/ base)
    }
    while(!remPilha.isEmpty()){
        baseSring+= digits[remPilha.pop()]
    }
    return baseSring
}
console.log(baseConversor(100345, 15))

