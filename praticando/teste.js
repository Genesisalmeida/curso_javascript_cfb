
// Obtém todos os elementos com a classe "total"
let elementosTotal = document.getElementsByClassName("total");

// Inicializa a variável para armazenar a soma
let soma = 0;

// Percorre todos os elementos com a classe "total" e soma seus valores
for (let  i in elementosTotal) {
    let valor = parseFloat(elementosTotal[i].textContent); // Converte o valor para um número
    if (!isNaN(valor)) {
        soma += valor; // Soma o valor ao total
    }
}

// Exibe o resultado da soma

function res(n1){
let somaTotalElement = document.getElementById("rs");
  return  somaTotalElement.innerHTML = n1.toFixed(2); 
}
// Exibe a soma formatada, neste caso, com 2 casas decimais
res(soma)
