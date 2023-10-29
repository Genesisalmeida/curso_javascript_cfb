// aprendendo operador this//

let pessoa = (nome,idade)=>{
    this.nome = nome;
    this.idade = idade;
    return `${this.nome}  ${this.idade}`

}

console.log(pessoa('binho',18));