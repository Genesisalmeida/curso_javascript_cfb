//Coleção Set//
//Uma coleção Set em JavaScript é uma estrutura de dados que armazena valores únicos. Isso significa que você pode adicionar valores a ela, mas se um valor já estiver presente, ele não será adicionado novamente. Aqui está como você pode criar e usar um Set em JavaScript

//Métodos:
// add(value): Adiciona um novo elemento ao Set. Retorna o próprio Set, permitindo operações encadeadas.
// delete(value): Remove um elemento específico do Set, se existir. Retorna true se o elemento foi removido com sucesso, caso contrário, retorna false.
// has(value): Verifica se um elemento específico está presente no Set. Retorna true se o elemento estiver presente, caso contrário, retorna false.
// clear(): Remove todos os elementos do Set.
// forEach(callbackFn[, thisArg]): Executa uma função de callback para cada elemento do Set, na ordem de inserção. A função de callback recebe três argumentos: o valor do elemento, a chave (que é o mesmo valor, já que os Sets não têm chaves) e o próprio Set.
// entries(): Retorna um novo objeto de iteração que contém pares [valor, valor] para cada elemento do Set, na ordem de inserção. (Para compatibilidade com o Map).
// values(): Retorna um novo objeto de iteração que contém os valores dos elementos do Set, na ordem de inserção.
// keys(): É um alias para o método values(). (Para compatibilidade com o Map).
// Symbol.iterator: Método que retorna o iterador padrão para percorrer os elementos do Set, permitindo que você use estruturas de controle como for...of.
// Symbol.toStringTag: Uma propriedade especial que é um símbolo usado para personalizar a descrição do objeto. Para Set, o valor é "Set".

//EXEMPLO//

let  cores = new Set(['vermelho','rosa']) ;

cores.add('VERDE')
cores.add('AZUL')
cores.add('AZUL')// ao adicionar a cor 'AZUL' o set ignora pois ja temos ela na coleção

console.log(cores)
let letras = new Set(["a", "b", "c"]);

// exercico //

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

let uniao = (a, b) => {
    let uniaoSet = new Set(a); // Cria uma cópia de 'a'

    // Adiciona todos os elementos de 'b' à união
    for (let elemento of b) {
        uniaoSet.add(elemento);
    }

    return uniaoSet;
}

console.log(uniao(set1, set2));
