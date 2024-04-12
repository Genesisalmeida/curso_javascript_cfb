
// const caixa1 = document.querySelector('.caixa1');
// const caixa2 = document.querySelector('.caixa2');
// const buttom = document.querySelector('button');
// const buttom2 = document.querySelector('#reset')
// const cursos = [...document.querySelectorAll('.liguagem')];//maneira de espalhar diretamente//;


// // evento de selecionar as caixas//
// cursos.map((e)=>{
//     e.addEventListener('click',(evt)=>{
//         const curso = evt.target;//O "target" em um evento JavaScript se refere ao elemento HTML em que o evento ocorreu. Isso é especialmente útil ao trabalhar com manipulação de eventos, como adicionar um evento de clique a um elemento e, em seguida, identificar qual elemento específico foi clicado.
//         curso.classList.toggle('selecionado');//classList.toggle() em JavaScript para alternar uma classe em um elemento HTML. A função classList.toggle() é usada para adicionar ou remover uma classe de um elemento, dependendo se ela já existe ou não. Aqui está como você pode usá-la:
//         evt.stopPropagation()
//     })
// })

// buttom.addEventListener('click', ()=>{
//     const cursosSelecto=[...document.querySelectorAll('.selecionado')];
//         cursosSelecto.map((e)=>{
//         caixa2.appendChild(e)//O método appendChild() é uma função JavaScript que é usada para adicionar um nó (geralmente um elemento HTML) como filho de outro nó (geralmente um elemento pai). Ele é frequentemente usado para construir e manipular a estrutura do documento HTML dinamicamente
        
//         })
        
// });
// buttom2.addEventListener('click', ()=>{
//     const cursoNoSelecto=[...document.querySelectorAll(".liguagem:not(.selecionado)")];
//     cursoNoSelecto.map((e)=>{
//         caixa1.appendChild(e)
//     })

// });

// exemplo do chat gpt//

const caixa1 = document.querySelector('.caixa1');
const caixa2 = document.querySelector('.caixa2');
const buttom = document.querySelector('button');
const buttom2 = document.querySelector('#reset')
const cursos = [...document.querySelectorAll('.liguagem')];

// evento de selecionar as caixas//
cursos.map((e)=>{
    e.addEventListener('click',(evt)=>{
        const curso = evt.currentTarget; // Use evt.currentTarget em vez de evt.target
        
        if (evt.target === curso || curso.contains(evt.target)) { // Verifica se o clique foi na div ou em um filho dela
            curso.classList.toggle('selecionado');
        }
        evt.stopPropagation();
    });
});

buttom.addEventListener('click', ()=>{
    const cursosSelecto=[...document.querySelectorAll('.selecionado')];
    cursosSelecto.map((e)=>{
        caixa2.appendChild(e);
    });
});

buttom2.addEventListener('click', ()=>{
    const cursoNoSelecto=[...document.querySelectorAll(".liguagem:not(.selecionado)")];//.liguagem: Isso seleciona todos os elementos que têm a classe "liguagem".
  //:not(.selecionado): Isso diz para o seletor pegar apenas os elementos que não têm a classe 
    cursoNoSelecto.map((e)=>{
        caixa1.appendChild(e);
    });
});