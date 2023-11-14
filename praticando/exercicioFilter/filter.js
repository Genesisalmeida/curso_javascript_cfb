const buttom = document.querySelector('#selection');

buttom.addEventListener('click',(evt)=>{
    const todosradio = [...document.querySelectorAll('input[type=radio]')];
    let radiosSelecionados= todosradio.filter((elem)=>{
        return elem.checked
    })
    radiosSelecionados=radiosSelecionados[0]; //aqui estamos pegamos somente o conteudo do radio selecionado na posição 0
        const input = document.querySelector('#input')
        const cursosSelecionados = radiosSelecionados.parentNode.firstChild.textContent
        input.value = cursosSelecionados
  // input.value =  radiosSelecionados.value

})