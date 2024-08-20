const palco = document.querySelector('.box_AT');
const numeroObjt = document.querySelector('#num_obj');
const quantidaObjt = document.querySelector('#Q_obj');
const butAdd= document.querySelector('.but');
const butRemove = document.querySelector('#butt_remover');

let larguraPalco = palco.offsetWidth; // pegando  largura da area box_AT
let alturaPalco = palco.offsetHeight; // pegando altura da area arre box_AT
let bolas = [];
let numBola =0;

//criando a classe bola

class Bola{
    constructor(arrayBolas,palco){
        this.tam = Math.floor(Math.random()*10)+10;
        this.r = Math.floor(Math.random()*255);
        this.g = Math.floor(Math.random()*255);
        this.b = Math.floor(Math.random()*255);
        this.px = Math.floor(Math.random()*(larguraPalco-this.tam));
        this.py = Math.floor(Math.random()*(larguraPalco-this.tam));
        this.velox = Math.floor(Math.random()*2)+0.5;
        this.veloy = Math.floor(Math.random()*2)+0.5;
        this.dirx = (Math.random()*10) > 5 ? 1 : -1;
        this.diry = (Math.random()*10) > 5 ? 1 : -1;
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*10000000000000);
        this.desenhar()
        this.controle = setInterval(this.controlar,10)
        this.eu=document.getElementById(this.id)
        numBola++
        numeroObjt.innerHTML = numBola
     }

     minhaPos=()=>{
        return this.arrayBolas.indexOf(this.id) // usando indexOf () para pegar posição 
    }
    remover = ()=>{
        clearInterval(this.controle) // removendo interval
        bolas=bolas.filter((bola)=>{  // usando o filter para remover as bolas
            if(bola.id!=this.id){
                return bola
            }
        })
        this.eu.remove() // deletando do  Dom
        numBola--
        numeroObjt.innerHTML = numBola
    }
    desenhar=()=>{
        const div = document.createElement('div');
        div.setAttribute('id',this.id)
        div.setAttribute('class','bola')
        div.setAttribute('style',`left:${this.px};top:${this.py};width:${this.tam};height:${this.tam};background-color:rgb(${this.r},${this.g},${this.b})`);
        this.palco.appendeChild(div)
    }
    controlar=()=>{

    }
}


window.addEventListener("resize",(evt)=>{ // evento  que pega as dimensões da tela quando alteramosa mesma
    larguraPalco=palco.offsetWidth
    alturaPalco = palco.offsetHeight
    console.log(alturaPalco)
});

butAdd.addEventListener("click",(evt)=>{
    const quantObj = quantidaObjt.value
    for(let i=0; i<quantObj;i++){

     }
})

butRemove.addEventListener("click",(evt)=>{
    bolas.map((b)=>{
        //remover a bolinha

        
    })
})