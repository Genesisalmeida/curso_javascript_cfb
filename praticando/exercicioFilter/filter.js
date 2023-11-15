const buttom = document.querySelector('#selection');
const buttomRemove = document.querySelector('#remove');

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
        }else{
            console.log('selecione um curso')
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
  
})