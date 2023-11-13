// Removendo Elementos 
// const box =[...document.querySelectorAll('.obj')];

// box.map((e)=>{

//    const elm =document.createElement('img');
//    elm.setAttribute('src','../CriandoElement/img/excluir.png'); // AQUI ESTAMOS ADICIONANDO ATRIBUTO SRC NO 'IMG//
//     e.appendChild(elm);
//     elm.addEventListener('click',(event)=>{
    
//         e.remove() // aqui estamos removendo os elementos
 
// })
// })



const box =document.querySelectorAll('.box');
const obj = [...document.querySelectorAll('.obj')].reverse();

obj.map((e)=>{
    const img =document.createElement('img');
    img.setAttribute('src','../CriandoElement/img/excluir.png')
    e.appendChild(img);

    img.addEventListener('click', (elm)=>{
       
        e.remove()

    })
})
