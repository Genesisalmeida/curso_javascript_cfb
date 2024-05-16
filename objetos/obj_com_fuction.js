function Pessoa(nome,idade){ // usando  a fuction não precisamos usar o constructor//
    this.nome = nome,
    this.idade = idade,

    this.getNome=()=>{
        return this.nome
    },
    this.setNome=(nome)=>{
        this.nome = nome
    },
    this.setIdade=(idade)=>{
        this.idade = idade
    }
}

let p1 = new Pessoa('binho',25)
p1.setNome('Pedro')// aqui estamos setando o nome para pedro//
p1.setIdade(25)
console.log(p1.nome)
console.log(p1.idade)
