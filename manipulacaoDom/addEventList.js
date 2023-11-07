//add eventeList//
const div = document.querySelectorAll('div');
let l =[...div];

l.map((e)=>{
   e.addEventListener('click',(l)=>{ // como usar o addEventList dentro do 'Map'...
        console.log(`${e.tagName} foi cricado`)
        e.innerHTML='Modificou'
   }) 
})
div.addEventListener('click', (e)=>{// evento de click.. 
    console.log(e.target) // auqi estamos capturando o event
    div.innerHTML='Amém';
    div.style.color='blue';
});

