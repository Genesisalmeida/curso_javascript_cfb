
const caixa1 = document.querySelector('.caixa1');
const caixa2 = document.querySelector('.caixa2');
const buttom = document.querySelector('button');
const buttom2 = document.querySelector('#reset')
const cursos = [...document.querySelectorAll('.liguagem')];//maneira de espalhar diretamente//;



cursos.map((e)=>{
    e.addEventListener('click',(evt)=>{
        const curso = evt.target;
        curso.classList.toggle('selecionado');// aqui estamos usando classlist para add uma classe nova no curso;

    })
})

buttom.addEventListener('click', ()=>{
    const cursosSelecto=[...document.querySelectorAll('.selecionado')];
        cursosSelecto.map((e)=>{
        caixa2.appendChild(e)
        
        })
        
});
buttom2.addEventListener('click', ()=>{
    const cursoNoSelecto=[...document.querySelectorAll(".liguagem:not(.selecionado)")];
    cursoNoSelecto.map((e)=>{
        caixa1.appendChild(e)
    })

})

