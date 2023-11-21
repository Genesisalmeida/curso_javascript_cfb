const buttom = document.querySelector('#selection');
const buttomRemove = document.querySelector('#remove');
const div = document.querySelector('.caixa1');
const input = document.querySelector('#input');
const adicionarAntes =document.querySelector('#ada');
const adicionandoDepois = document.querySelector('#add');

const radioSelecionado=()=>{ // fuction para selecionar os elementos
    const todosradio = [...document.querySelectorAll('input[type=radio]')];
    const rs= todosradio.filter((elem)=>{
        return elem.checked;
    });
         return rs[0];//aqui estamos pegamos somente o conteudo do radio selecionado na posição 0
}
buttom.addEventListener('click',(evt)=>{
    const input = document.querySelector('#input');
    const radiosSelecionados= radioSelecionado();
        if(radiosSelecionados!=undefined){
            const cursosSelecionados= radiosSelecionados.parentNode.firstChild.textContent
            input.value = cursosSelecionados;
            alert(cursosSelecionados);
        }else{
            alert('selecione um curso')
        }
});
buttomRemove.addEventListener('click',(evt)=>{
    const elementselect = radioSelecionado()//aqui ja estamos usando a funçao'radioSelecionado no buttomremove//
    if(elementselect!=undefined){ // aqui estamos tratando o erro do consoole undefined
        const cursosSelecionados = elementselect.parentNode
        cursosSelecionados.remove()
        const input = document.querySelector('#input');
        input.value=''
    }else{
        console.log('selecione um curso')
    }
  
});

const criarNovocurso=()=>{ //função  que cria elemento//
    if (input.value !== '') {
        const element = document.createElement('div');
        element.innerHTML = input.value;
        element.setAttribute('class', 'liguagem');
        div.append(element);
        
        const novoElement = document.createElement('input');
        novoElement.setAttribute('type', 'radio');
        element.appendChild(novoElement);
        return element;
    } else {
           alert('Digite o nome do curso');
                return null;
            }
    
}

adicionarAntes.addEventListener('click',(evt)=>{
    const radiosSelecionados= radioSelecionado(); // aqui estamos adicionando curso antes do radio 
    const criarnovocurso = criarNovocurso()
        if(radiosSelecionados && criarnovocurso){
            const cursosSelecionados= radiosSelecionados.parentNode
            div.insertBefore(criarnovocurso,cursosSelecionados) 
        }  
            
    })

adicionandoDepois.addEventListener('click',(evt)=>{
    const radiosSelecionados= radioSelecionado(); // aqui estamos adicionando curso antes do radi
    const criarnovocurso = criarNovocurso()
        if(radiosSelecionados && criarnovocurso){
            const cursosSelecionados= radiosSelecionados.parentNode
            div.insertBefore(criarnovocurso,cursosSelecionados.nextSibling);  // aqui uma maneira de adicionar depois usando 'nextsibling' ou seja  PROXIMOIRMÃO
    }
});
   