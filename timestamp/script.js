import { Cxmsg } from "../projeto_caixa-msg/cxmsg.js";

const p = document.querySelector('#timer');
const b = document.querySelector('#go');
const stp = document.querySelector('#zerar');
const parar = document.querySelector('#parar');
const box = document.querySelector('.box')
const parcial = document.querySelector('#parcial')

let interva = null;
let pegarInt = false; // começa parado
let timestamp = null;
let tempoPausado = 0; // acumulador do tempo anterior à pausa

let c = () => {
    const tmptual = Date.now();
    let cont = tmptual - timestamp + tempoPausado; // soma o tempo antes da pausa
    let sec = Math.floor(cont / 1000);
    p.innerHTML = coverter(sec)

};

const coverter = (sec) => {
    const hora = Math.floor(sec / 3600);
    const resto = sec % 3600;
    const minut = Math.floor(resto / 60);
    const secgundo = Math.floor(resto % 60);
    return `${hora < 10 ? "0" + hora : hora}:${minut < 10 ? "0" + minut : minut}:${secgundo < 10 ? "0" + secgundo : secgundo}`;
};

// Iniciar
b.addEventListener('click', () => {
    if (pegarInt) return; // já está rodando, não reinicia
    timestamp = Date.now();
    interva = setInterval(c, 1000);
    pegarInt = true;

});

// Zerar
stp.addEventListener('click', () => {
    clearInterval(interva);
    p.innerHTML = '00:00:00';
    pegarInt = false;
    tempoPausado = 0;
    timestamp = null;
    box.innerHTML= '<p> Parciais </p> '
  Cxmsg.mostrar('Cronômetro','O Cronômetro foi zerado')

});

// Pausar / Continuar
parar.addEventListener('click', () => {
    if (pegarInt) {
        // Se estiver rodando → pausa
        clearInterval(interva);
        tempoPausado += Date.now() - timestamp;
        pegarInt = false;
      
    } else {
        // Se estiver pausado → continua de onde parou
        timestamp = Date.now();
        interva = setInterval(c, 1000);
        pegarInt = true;
    }
});
parcial.addEventListener('click',()=>{
 exibirValo()
});

const exibirValo = ()=>{
    const div =document.createElement('div');
    div.setAttribute('class','parci');
    div.innerHTML = p.textContent;
    box.appendChild(div);
   
}