const teclasNum = [...document.querySelectorAll('.num')];
const teclasOp = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const calculadora = document.querySelector('.calc');
const display = document.querySelector('.display');
const tcopy = document.querySelector('#tcopy');
const clear = document.querySelector('#limpar');
const teclaIgual = document.querySelector('#tigual');
const teste = document.querySelector('#teste');
const gavetaon = document.querySelector('.gavetaon');
const gavetaof = document.querySelector('#gavetaof')
const img = document.querySelector('.img');

let sinal = false;
let decimal = false;

// teclas numericas
teclasNum.map((elemen) => {
    elemen.addEventListener('click', (evt) => {
        sinal = false;
        if (evt.target.innerHTML == ',') {
            if (!decimal) {
                decimal = true;
                if (display.innerHTML == '0') {
                    display.innerHTML = '0,';
                } else {
                    display.innerHTML += evt.target.innerHTML;
                }
            }
        } else {
            if (display.innerHTML == '0') {
                display.innerHTML = '';
            }
            display.innerHTML += evt.target.innerHTML;
        }
    });
});

// teclas operações
teclasOp.map((elemen) => {
    elemen.addEventListener('click', (evt) => {
        if (!sinal) {
            sinal = true;
            if (display.innerHTML == '0') {
                display.innerHTML = '';
            }
            if (evt.target.innerHTML == 'x') {
                display.innerHTML += '*';
            } else {
                display.innerHTML += evt.target.innerHTML;
            }
        }
    });
});

// zerando o display
clear.addEventListener('click', () => {
    sinal = false;
    decimal = false;
    display.innerHTML = "";
});

// tecla operação
teclaIgual.addEventListener('click', () => {
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML);
    if (res != undefined) {
        display.innerHTML = res; // eval avalia a expressão e retorna seu valor.
    } else {
        alert('Digite valores válidos');
    }
});

// copiar para área de transferência
tcopy.addEventListener('click', (evt) => {
    teste.select(); // Bom usar o select antes, principalmente em dispositivos mobile
    navigator.clipboard.writeText(display.innerHTML);
});

// transição da gaveta
gavetaon.addEventListener('click', () => {
    calculadora.classList.toggle('active');
    gavetaon.style.display =gavetaon.style.display ==='none'? 'flex':'none'
    gavetaof.style.display =gavetaof.style.display ==='flex'? 'none':'flex'

});

gavetaof.addEventListener('click', () => {
    calculadora.classList.toggle('active');
    gavetaof.style.display =gavetaof.style.display ==='flex'? 'none':'flex'
    gavetaon.style.display =gavetaon.style.display ==='none'? 'flex':'none'

});
