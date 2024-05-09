const listaCompras = [];
const div = document.querySelector('.box');
const elementLista = document.querySelector('#elementLista');
const buttonAdd = document.querySelector('#buttonAdd');
const buttonRemove = document.querySelector('#buttonRemove');

buttonAdd.addEventListener('click',  ()=> {
        let valor = elementLista.value;
        listaCompras.push(valor);
        console.log(listaCompras)
        lista();
    });

buttonRemove.addEventListener('click', () => {
    remove();
});

function lista() {
   div.innerHTML = ""; // Limpa a div antes de recriar a lista
    listaCompras.map((item,id) => {
        let p = document.createElement('p');
        p.textContent = `${id}: ${item} `;
        div.append(p);
       
    });
}

function remove() {
    listaCompras.pop(); // Remove o último item da lista
    lista(); // Atualiza a exibição da lista após a remoção
}