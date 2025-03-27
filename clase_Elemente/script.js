const q1 = document.querySelector('#q1');
const q2 = document.querySelector('.caixa');
const posx = document.querySelector('#posx');
const posy = document.querySelector('#posy');
const largura = document.querySelector('#largura');
const altura= document.querySelector('#altura');


let infor = []
// Obtém as coordenadas e dimensões do elemento "q1" ao carregar a página
;

// Obtém as coordenadas e dimensões do elemento "q2" ao carregar a página

const info = (ele) => {

    let domrect = ele.getBoundingClientRect()
        // Atualiza o conteúdo do elemento HTML com a posição X do elemento clicado
    posx.innerHTML = `posx: ${domrect.x}`;

    // Atualiza o conteúdo do elemento HTML com a posição Y do elemento clicado
    posy.innerHTML = `posy: ${domrect.y}`;

    // Atualiza o conteúdo do elemento HTML com a largura do elemento clicado
    largura.innerHTML = `largura: ${domrect.width}`;

    // Atualiza o conteúdo do elemento HTML com a altura do elemento clicado
    // OBS: Tem um erro de digitação aqui. "poxs" deveria ser "altura"
    altura.innerHTML = `altura: ${domrect.height}`;
}

// Adiciona um evento de clique ao elemento "q1"
// Quando "q1" é clicado, chama a função info() passando "el1" como argumento
q1.addEventListener('click', (evt) => {  
    info(evt.target);

});

// Adiciona um evento de clique ao elemento "q2"
// Quando "q2" é clicado, chama a função info() passando "el2" como argumento
q2.addEventListener('click', (evt) => {  
    info(evt.target);
});


//Classe Elemente//
        
q1.accessKey='b';  
q2.accessKey='n';
//Essas duas linhas de código definem acessos rápidos (ou "atalhos de teclado") para os elementos q1 e q2 usando a propriedade accessKey. Vou explicar em detalhes:
// O que é accessKey?
// A propriedade accessKey é usada para associar uma tecla de atalho ao elemento HTML. Quando a tecla designada é pressionada, o foco é automaticamente dado ao elemento associado (se estiver acessível). Isso pode ser útil para melhorar a navegação por teclado em páginas web.
