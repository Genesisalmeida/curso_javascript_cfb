let elm = [...document.querySelectorAll('h1')];
let div = document.querySelector('div')

elm.map((e)=>{
    e.addEventListener('click',(e)=>{
        e.stopPropagation()//Quando um evento ocorre em um elemento HTML, ele normalmente se propaga através da árvore DOM, seguindo um fluxo de eventos que vai do elemento alvo (onde o evento ocorreu) até o elemento raiz do documento. Isso é conhecido como "propagação de eventos" ou "bubbling".Às vezes, você pode querer impedir que um evento se propague através do DOM, ou seja, você deseja interromper a propagação do evento. Para fazer isso, você pode usar o método stopPropagation. O stopPropagation é geralmente chamado dentro de um tratador de eventos (event handler) e impede que o evento se propague para os elementos pai. Aqui está um exemplo de como usar stopPropagation:
    })
})
div.addEventListener('click',()=>{
  console.log('clicou')
})

