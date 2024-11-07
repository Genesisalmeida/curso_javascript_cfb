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

// function decimaBinario(n){
//     const remPilha = new Pilha();
//     let number = n;
//     let rem;
//     let binaryString ='';
//     while(number > 0){
//         rem = Math.floor(number % 2)
//         remPilha.push(rem)
//         number = Math.floor(number / 2)
// 
//     }
//     while(!remPilha.isEmpty()){
//      binaryString+=remPilha.pop().toString()

//     }
//     return binaryString
   
   
// }

// console.log(decimaBinario(4));

//Conversor de base

// function baseConversor(decimal , base){
//     const remPilha = new Pilha();
//     const digits = '0123456789ABCDEFGHIJKMNOPQRSTUVWXYZ';
//     let number = decimal;
//     let rem;
//     let baseSring = '';
//     if(!(base >= 2 && base<= 36)){
//         return '';
//     }
//     while(number > 0){
//         rem = Math.floor(number % base);
//         remPilha.push(rem);
//         number = Math.floor(number/ base)
//     }
//     while(!remPilha.isEmpty()){
//         baseSring+= digits[remPilha.pop()]
//     }
//     return baseSring
// }
// console.log(baseConversor(100345, 16))

// FILAS//




// class Filas {
//     constructor() {
//         // Inicializa a contagem de elementos na fila.
//         this.count = 0;
//         // Mantém o controle do índice do primeiro elemento da fila.
//         this.lowesCount = 0;
//         // Objeto que irá armazenar os elementos da fila.
//         this.items = {};
//     }

//     // Adiciona um elemento no final da fila.
//     enqueue(element) {
//         // Armazena o elemento no índice atual de count.
//         this.items[this.count] = element;
//         // Incrementa o count para refletir o novo tamanho da fila.
//         this.count++;
//     }

//     // Remove e retorna o primeiro elemento da fila.
//     dequeue() {
//         // Verifica se a fila está vazia.
//         if (this.isEmpty()) {
//             return undefined;  // Retorna indefinido se a fila estiver vazia.
//         }
//         // Armazena o primeiro elemento da fila (na posição lowesCount).
//         const result = this.items[this.lowesCount];
//         // Remove o primeiro elemento da fila.
//         delete this.items[this.lowesCount];
//         // Incrementa lowesCount para apontar para o próximo item.
//         this.lowesCount++;
//         // Retorna o elemento removido.
//         return result;
//     }

//     // Retorna o primeiro elemento da fila sem removê-lo.
//     peek() {
//         // Verifica se a fila está vazia.
//         if (this.isEmpty()) {
//             return undefined;  // Retorna indefinido se estiver vazia.
//         }
//         // Retorna o primeiro elemento sem remover.
//         return this.items[this.lowesCount];
//     }

//     // Verifica se a fila está vazia.
//     isEmpty() {
//         // Retorna true se a fila não tiver elementos.
//         return this.count - this.lowesCount === 0;
//     }

//     // Retorna o tamanho atual da fila.
//     size() {
//         // O tamanho é dado pela diferença entre count e lowesCount.
//         return this.count - this.lowesCount;
//     }

//     // Remove todos os elementos da fila.
//     clear() {
//         // Reseta os valores para os iniciais.
//         this.items = {};
//         this.count = 0;
//         this.lowesCount = 0;
//     }

//     // Retorna uma string com todos os elementos da fila.
//     toString() {
//         // Verifica se a fila está vazia.
//         if (this.isEmpty()) {
//             return '';  // Retorna string vazia se não houver elementos.
//         }
//         // Inicia a string com o primeiro elemento da fila.
//         let objString = `${this.items[this.lowesCount]}`;
//         // Itera sobre os elementos restantes e adiciona à string.
//         for (let i = this.lowesCount + 1; i < this.count; i++) {
//             objString = `${objString},${this.items[i]}`;
//         }
//         // Retorna a string com os elementos separados por vírgulas.
//         return objString;
//     }
// }

// Testando a fila
// const f = new Filas();
// f.enqueue('BINHO');  // Adiciona 'ddd' à fila.
// f.enqueue('SELMA');
// f.enqueue('Carlos') // Adiciona 'vvv' à fila.
// f.peek()
// console.log(f.toString());  // Exibe os elementos da fila como uma string: "ddd,vvv".
// console.log(f.peek()) 
// console.log(f.isEmpty())


// Estrututura de dados de deque

class Deque{
    constructor(){
        this.iten = {}
        this.cont = 0;
        this.start = 0;
    }
    addBack(ele){
        this.iten[this.cont]=ele;
        this.cont++;
    }
    removeFront(){
        if(this.isEmpty()){
            return undefined
        }
        const remove = this.iten[this.start]
        delete this.iten[this.start]
        this.start++
        return remove
    }
    
    removeBack() {
        if (this.isEmpty()) {
            return "A pilha está vazia"; // Retorna mensagem se a pilha estiver vazia
        }
        this.cont--; // Decrementa a contagem
        const removed = this.iten[this.cont]; // Obtém o elemento removido
        delete this.iten[this.cont]; // Remove o elemento do objeto
        return removed; // Retorna o elemento removido
    }
    addFront(ele){
        if(this.isEmpty()){
            this.enqueue(ele)
        }else if(this.start > 0){ // Verificação se Existe Espaço Antes do Início
            this.start--
            this.iten[this.start]=ele;
        }else{
            for(let i = this.cont; i>0; i--){
               this.iten[i] = this.iten[i-1]
            }
            this.cont++
            this.start = 0;
            this.iten[0] = ele
        }

    }
    isEmpty() {
        // Retorna true se a fila não tiver elementos.
        return this.cont - this.start === 0;
    }
    size(){
        return this.cont - this.start
    }
    clear(){
        this.iten = {}
        this.cont = 0;
        this.start = 0;
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let stringObj = `${this.iten[this.start]}`;
        this.control= 0
        for(let i = this.control+ 1; i<this.cont; i++){
              stringObj+=` ${this.iten[i]}`; 
        }
        return stringObj
     }
}


const d = new Deque

d.addBack('binho')
d.addBack('carla')
d.addBack('carlos')
d.addBack('maria')
d.addFront('LUCASSSS')
d.toString()

d.toString()

console.log(d.toString())

console.log(d.size())
console.log(d)