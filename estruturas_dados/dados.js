// PILHAS//

class Stack {
    constructor() {
        this.itens = [] // Inicializa um array vazio para armazenar os elementos da pilha
    }

    push(element) {
        this.itens.push(element) // Adiciona um elemento ao topo da pilha (fim do array)
    }

    pop() {
        this.itens.pop() // Remove e retorna o elemento do topo da pilha (último do array)
    }

    peek() {
        return this.itens[this.itens.length - 1] // Retorna o elemento do topo da pilha sem removê-lo
    }

    isEmpty() {
        return this.itens.length === 0 ? 'A pilha esta vazio' : 'A pilha não está vazia' 
        // Verifica se a pilha está vazia. Se o comprimento do array for 0, retorna 'vazio'. Caso contrário, 'não está vazia'
    }
    clear() {
        this.itens = [] // Limpa a pilha, removendo todos os elementos (tornando o array vazio)
    }
    size(){
     return   this.itens.length
    }
}    
const e = new Stack()
e.push(10)
e.push(5)
e.push(4)
e.push(10)
e.push(8)
e.pop()
e.pop()
console.log(e.isEmpty())
console.log(e.size())
console.log(e.peek()) // exibe 8

//e.clear()


console.log(e.itens)

