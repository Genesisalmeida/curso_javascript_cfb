class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    getNome(){

    }
    setIdade(){

    }
}


let but = document.querySelector('.add')
let res = document.querySelector('.res')

but.addEventListener('click', ()=>{
    let nome = document.querySelector('#inp1').value
    let idade = Number(document.querySelector('#inp2').value)
    if(!isNaN(idade)){
        
    }else{
       alert('Digite um  valor válido no campo Idade')
    }
    let p1 = new Pessoa(nome,idade);
    res.innerHTML=`Nome:${p1.nome}
    Idade:${p1.idade}`
    
})
