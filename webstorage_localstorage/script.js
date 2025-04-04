// Carregar tarefas do Local Storage
function carregarTarefas() {
    const tarefas = localStorage.getItem("tarefas");
    return tarefas ? JSON.parse(tarefas) : [];
}

// Salvar tarefas no Local Storage
function salvarTarefas(tarefas) {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Adicionar uma nova tarefa
function adicionarTarefa() {
    const tarefaInput = document.getElementById("tarefaInput");
    const tarefa = tarefaInput.value.trim();

    if (tarefa === "") return;

    const tarefas = carregarTarefas();
    tarefas.push(tarefa);
    salvarTarefas(tarefas);

    tarefaInput.value = "";
    exibirTarefas();
}

// Remover uma tarefa
function removerTarefa(index) {
    const tarefas = carregarTarefas();
    tarefas.splice(index, 1);
    salvarTarefas(tarefas);
    exibirTarefas();
}

// Exibir tarefas na tela
function exibirTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    const tarefas = carregarTarefas();

    listaTarefas.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Excluir";
        btnRemover.onclick = () => removerTarefa(index);

        li.appendChild(btnRemover);
        listaTarefas.appendChild(li);
    });
}

// Inicializar a lista ao carregar a página
exibirTarefas();
