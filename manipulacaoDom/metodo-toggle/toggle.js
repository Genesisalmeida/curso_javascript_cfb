const selection = document.querySelector('#selection');
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
selecionados()

const cursosSelection=()=>{
    const rs= cursos.filter((elem,i)=>{
      return elem.classList.contains('selecionado' );
  
    
})
    return rs[0]
}

selection.addEventListener('click',()=>{
    const cursoSelecionado = cursosSelection().textContent;
    try{
      
  alert(`Curso selecionado foi ${cursoSelecionado}`)
              
    }
    catch{
        alert('Selecione um curso')
    }  
    
   
})
