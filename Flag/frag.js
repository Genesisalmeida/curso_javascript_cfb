
//  Vamos explorar o conceito de flag (ou bandeira) em programação, que é frequentemente usado para controlar o fluxo de execução do código, semelhante ao uso da variável sinal no seu exemplo.

// O Que é uma Flag?
// Uma flag é uma variável usada para indicar um estado ou condição específica dentro de um programa. Geralmente, uma flag é uma variável booleana, ou seja, que pode assumir os valores true ou false.

// Por Que Usamos Flags?
// Flags são usadas para:

// Controlar Fluxo de Execução: Determinar se um bloco de código deve ou não ser executado.
// Sinalizar Estados: Indicar se uma condição foi atingida ou não (por exemplo, se uma operação foi concluída com sucesso).
// Prevenir Ações Repetidas: Evitar que determinadas ações sejam executadas múltiplas vezes desnecessariamente.


// Exemplos de Uso de Flags
let flag = false;

function doSomething() {
  if (!flag) {
    // Executa alguma operação uma vez
    console.log("Operação executada!");
    flag = true;  // Define a flag como true para sinalizar que a operação foi realizada
  }
}

doSomething();  // Executa a operação
doSomething();  // Não executa a operação novamente


//Processamento Assíncrono:

let isLoading = false;

async function fetchData() {
  if (!isLoading) {
    isLoading = true;  // Define a flag como true para sinalizar que o carregamento está em andamento
    try {
      let data = await fetch('https://api.example.com/data');
      console.log(await data.json());
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    } finally {
      isLoading = false;  // Redefine a flag para false após a conclusão do carregamento
    }
  }
}

fetchData();
fetchData();  // O segundo fetch não será executado enquanto o primeiro não terminar

