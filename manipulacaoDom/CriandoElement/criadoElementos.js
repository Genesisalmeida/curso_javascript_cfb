const div =document.querySelector('.box');
const divs = [...document.querySelectorAll('.obj')]
 
const cursos = ['php','css','javascript','html'];


cursos.map((el)=>{
   const newElement = document.createElement('h1');
    newElement.setAttribute('class', 'set'); // 
    div.appendChild(newElement)
    newElement.innerHTML=el
});


divs.map((e)=>{
const newElement =document.createElement('h1');// criando novo elemento
newElement.innerHTML='jesus é  bom';// adicionado valor ao elemento
newElement.setAttribute('class','color')
e.appendChild(newElement) // adicionando novo elemento criado a div
})



