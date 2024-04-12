//add eventeList//
const div = document.querySelectorAll('div');
let l =[...div];

l.map((e)=>{
   e.addEventListener('click',(l)=>{ // como usar o addEventList dentro do 'Map'...
        console.log(`${e.tagName} foi clicado`)
        e.innerHTML='Modificou'
   }) 
})

// l.map((e)=>{
//     e.addEventListener('click', (e)=>{// evento de click.. 
//     console.log(e.target) // auqi estamos capturando o event
// });
// })


