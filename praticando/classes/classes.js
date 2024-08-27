const palco = document.querySelector('.box_AT');
const numeroObjt = document.querySelector('#num_obj');
const quantidaObjt = document.querySelector('#Q_obj');
const butAdd= document.querySelector('.but');
const butRemove = document.querySelector('#butt_remover');

let larguraPalco = palco.offsetWidth; // Armazenam a largura  do palco, ou seja, a área onde as bolinhas vão se mover.
let alturaPalco = palco.offsetHeight; // Armazenam a altura  do palco, ou seja, a área onde as bolinhas vão se mover.
let bolas = [];
let numBola =0; // Contador que rastreia o número de bolinhas ativas.

//criando a classe bola

class Bola{
    constructor(arrayBolas,palco){
        this.tam = Math.floor(Math.random()*10)+10;//Define o tamanho da bolinha, que é aleatório
        this.r = Math.floor(Math.random()*255);
        this.g = Math.floor(Math.random()*255);
        this.b = Math.floor(Math.random()*255);
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam));// Definem a posição inicial da bolinha dentro do palco, considerando seu tamanho para que não fique fora da área.
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam));
        ;
        this.velox = Math.floor(Math.random()*2)+0.5;//velocidade da bolina na direção x
        this.veloy = Math.floor(Math.random()*2)+0.5;// velocidade na direção y
        this.dirx = (Math.random()*10) > 5 ? 1 : -1;
        this.diry = (Math.random()*10) > 5 ? 1 : -1;
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*10000000000000);// Gera um identificador único para a bolinha, que será usado para manipulação no DOM.
        this.desenhar() //chama o metodo que vai  desenhar a bola
        this.controle = setInterval(this.controlar,10) // Define um intervalo que chama o método controlar a cada 10ms para atualizar a posição da bolinha.
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
        const div = document.createElement("div");
        div.setAttribute("id",this.id)
        div.setAttribute("class","bola")
        div.setAttribute('style',`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`);;
        this.palco.appendChild(div)
      
    }
   
    
        controle_bordas = () => {
            if (this.px + this.tam >= larguraPalco) {
                this.dirx = -1;
            } else if (this.px <= 0) {
                this.dirx = 1;
            }
            if (this.py + this.tam >= alturaPalco) {
                this.diry = -1;
            } else if (this.py <= 0) {
                this.diry = 1;
            }
        }
        
            
    
    controlar=()=>{
       this.controle_bordas()
        this.px+=this.dirx*this.velox
        this.py+=this.diry*this.veloy
        this.eu.setAttribute('style',`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`);
        if((this.px > larguraPalco)||(this.py > alturaPalco)){
            this.remover()
        }
    }
}


window.addEventListener("resize",(evt)=>{ // evento  que pega as dimensões da tela quando alteramosa mesma
    larguraPalco=palco.offsetWidth
    alturaPalco = palco.offsetHeight
    
});

butAdd.addEventListener("click",(evt)=>{
    const quantObj =quantidaObjt.value
    for(let i = 0; i < quantObj; i++){
        bolas.push(new Bola(bolas, palco));   
    }
    console.log(bolas)
})

butRemove.addEventListener("click",(evt)=>{
    bolas.map((b)=>{
        b.remover()
     })
})


