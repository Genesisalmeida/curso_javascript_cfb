import c from './export/contatos.js'

const listadeContatos = document.querySelector(".listaContato");
const butt = document.querySelector("#butt");

butt.addEventListener('click',(evt)=>{
    const cont = {
        nome:document.querySelector("#nome").value,
        telefone:document.querySelector("#telefone").value,
        email:document.querySelector("#email").value
    }
    c.contato.addContato(cont,listadeContatos)
})