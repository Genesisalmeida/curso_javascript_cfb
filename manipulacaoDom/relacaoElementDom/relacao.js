// const div = document.querySelector('.conteiner')

// // console.log(div.firstElementChild) // retorna o primeiro elemento da coleção
// // console.log(div.lastElementChild)// retorna o ultimo elemento 
// // console.log(div.children)// retorna  os filhos do conteiner
// // console.log(div.getRootNode()) // nó raiz da coleção sempre vai ser o document 


// // //Como verificar ser o elemento possui um filho ou não//
// // console.log(div.hasChildNodes()) //ESSE método retorna true se o elemento possui filho


// // // operando os elementos//
// // console.log(div.children[0].innerHTML='red');

// // // como pegar o parent 'PAI' dos elementos //

// // console.log(div.parentNode)
// // //como pegar 'avô  
// // console.log(div.parentNode.parentNode)



// //creando elemenos//

// const cursos =['java','css','html'];

// cursos.map((ele)=>{
//    const novoElemento = document.createElement('div')
//    novoElemento.setAttribute('class','caixa')
//    novoElemento.innerHTML=ele
//    div.appendChild(novoElemento)
// })

const div =document.querySelector('.conteiner');
const buton = document.querySelector('button');
const buton1 = document.querySelector('.butao')
const carros = ['palio','corsa','gol','punto'];

buton.addEventListener('click',()=>{
   carros.map((ele)=>{
      const cursos = document.createElement('div');
      cursos.setAttribute('class','caixa');
      cursos.innerHTML=ele;
      console.log(cursos)
     div.appendChild(cursos)
     
   })
})

buton1.addEventListener('click',()=>{
   const caixa = [...document.querySelectorAll('.caixa')]
   caixa.map((ele)=>{
     ele.remove()
   })
})
