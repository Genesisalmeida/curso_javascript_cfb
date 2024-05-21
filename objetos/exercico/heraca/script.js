const nome = document.querySelector('#name')
const portas = document.querySelector('#porta')
const blindagem= document.querySelector('#blindagem')
const municao= document.querySelector('#municao')
const radio1 = document.querySelector('#tipomilitar')
const  radio2 = document.querySelector('#tiponormal')
const button = document.querySelector('#but')



//criando a class //

class Carro {
    constructor(nome,portas){
        this.nome = nome;
        this.portas = portas
        this.ligado = false
    }
    ligar=()=>{
        this.ligado = true
    }
    desligar = ()=>{
        this.ligado = false
    }
}

class Militar extends Carro {
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.municao = municao
        this.blindagem = blindagem
    }
}

button.addEventListener('click',(evt)=>{
    console.log(portas)
})

radio1.addEventListener('click',(evt)=>{
    blindagem.removeAttribute('disabled')
    municao.removeAttribute('disabled')
   
})
radio2.addEventListener('click',(evt)=>{
    blindagem.value = 0
    municao.value = 0
    blindagem.setAttribute('disabled','disabled')
    municao.setAttribute('disabled','disabled')
    

})