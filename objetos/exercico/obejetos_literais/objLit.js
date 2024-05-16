const input1 = document.querySelector("#inp1");
const input2 = document.querySelector("#inp2");
const res = document.querySelector(".res");
const but = document.querySelector(".add");
const pessoas = [];

but.addEventListener('click', () => {
    // Obter os valores dos inputs dentro do evento de clique
    const pessoa = {
        nome: input1.value,
        idade:Number (input2.value)
    };

    // Adicionar pessoa ao array
    pessoas.push(pessoa);

    // Limpar a div .res antes de adicionar os novos elementos
    res.innerHTML = "";

    // Iterar sobre o array de pessoas e exibir na tela
    pessoas.map((ele) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'set');
        div.innerHTML = `Nome: ${ele.nome} <BR/> Idade: ${ele.idade}`;
        res.appendChild(div);
    });
});


