const caixa = document.querySelector('.caixa');
const addAntes = document.querySelector('#ada');
const addDepois = document.querySelector('#add');
const input = document.querySelector('#input');
const selection = document.querySelector('#selection');
const remove = document.querySelector('#remove');
const cursos = [...document.querySelectorAll('.liguagem')];

const selecionados = ()=>{
    cursos.map((ele)=>{
        ele.addEventListener('click',(evt)=>{
         tirarSelecao();  
        evt.target.classList.toggle('selecionado');  
        })
    })
};

const tirarSelecao=()=>{
    cursos.map((el)=>{
        el.classList.remove('selecionado');
    })
};

selecionados();

const cursosSelection=()=>{
    const selecionado =[...document.querySelectorAll('.selecionado')];
     return selecionado[0]
};

const criarNovocurso=()=>{ //função  que cria elemento//
   
    if (input.value !== '') {
        const element = document.createElement('div');
        element.innerHTML = input.value;
        element.setAttribute('class', 'liguagem');
        caixa.append(element);
        return element;
    } else {
           alert('Digite o nome do curso');
                return null;
    }  
}
addAntes.addEventListener('click',()=>{
    const addcursos = criarNovocurso();
    const selection = cursosSelection();
    if(addcursos && selection){
        caixa.insertBefore(addcursos,selection)
    }
});

addDepois.addEventListener('click',()=>{
    const addcursos = criarNovocurso();
    const selection = cursosSelection();
    if(addcursos && selection){
        caixa.insertBefore(addcursos,selection.nextSibling)
    }
});

selection.addEventListener('click',(evt)=>{
    const cursoSelecionado = cursosSelection();
        if(cursoSelecionado!==undefined){
            alert(`Curso Selecionado foi ${cursoSelecionado.innerHTML}`)
        }else{
            alert('Selecione um curso');
        }
});

remove.addEventListener('click',()=>{
    const cursoSelecionado = cursosSelection()
        if(cursoSelecionado!==undefined){
        cursoSelecionado.remove() 
        }else{
            alert('Selecione um curso para remover');
        }
});

