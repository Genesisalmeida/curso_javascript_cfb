const palco = document.querySelector('.box_AT');
const numeroObjt = document.querySelector('#num_obj');
const quantidaObjt = document.querySelector('#Q_obj');
const butAdd= document.querySelector('.but');
const butRemove = document.querySelector('#butt_remover');

let larguraPalco = palco.offsetWidth; // pegando  largura da area box_AT
let alturaPalco = palco.offsetHeight; // pegando altura da area arre box_AT
let bolas = [];
let numBola =0

//criando a classe bola

class Bola{
    constructor(){
        this.tam = Math.floor(Math.random()*10)+10;
        this.r = Math.floor(Math.random()*255);
        this.g = Math.floor(Math.random()*255);
        this.b = Math.floor(Math.random()*255);
        this.px = Math.floor(Math.random()*(larguraPalco-this.tam));
        this.py = Math.floor(Math.random()*(larguraPalco-this.tam));
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