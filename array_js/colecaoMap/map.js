// //Coleção Map em javascript//
// // A coleção `Map` em JavaScript é uma estrutura de dados que armazena pares chave-valor, onde cada chave única mapeia para um valor correspondente. Aqui está um resumo dos principais métodos e propriedades da coleção `Map`
// //  Métodos
// // 1. **set(key, value):** Adiciona um novo par chave-valor à coleção. Se a chave já existir, seu valor será atualizado. 
// // 2. **get(key):** Retorna o valor associado à chave especificada, ou `undefined` se a chave não existir na coleção. 
// // 3. **has(key):** Verifica se a chave existe na coleção. Retorna `true` se a chave existir e `false` caso contrário.
// // 4. **delete(key):** Remove o par chave-valor associado à chave especificada, se existir. Retorna `true` se o par foi removido com sucesso e `false` se a chave não existir na coleção.
// // 5. **clear():** Remove todos os pares chave-valor da coleção, deixando-a vazia.
// // 6. **forEach(callbackFn [, thisArg]):** Executa a função de callback uma vez para cada par chave-valor na ordem de inserção. O parâmetro `thisArg` é opcional e define o valor de `this` dentro da função de callback.
// // 7. **keys():** Retorna um iterador contendo as chaves da coleção na ordem de inserção.
// // 8. **values():** Retorna um iterador contendo os valores da coleção na ordem de inserção.
// // 9. **entries():** Retorna um iterador contendo os pares chave-valor da coleção na ordem de inserção, cada um como um array `[chave, valor]`.
// // 10. **size:** Retorna o número de pares chave-valor na coleção.
// // ### Propriedades:
// // 1. **prototype:** Permite adicionar novas propriedades e métodos ao construtor `Map.prototype`.
// // 2. **constructor:** Retorna a função que criou a instância do objeto. No caso de `Map`, é a função `Map()`.
// // A coleção `Map` fornece uma maneira eficiente de armazenar e manipular dados usando chaves únicas e valores associados. Ela é amplamente utilizada em JavaScript para várias tarefas, como cache, gerenciamento de estado e manipulação de dados estruturados.

// //exemplo//
let mapa = new Map();

mapa.set('carro','fusca');
mapa.set(10,'fiat');
mapa.set('cor','red');

//console.log(mapa);

// vereificando o valor da chave 'carro'//
console.log(`o valor da chave carro é: ${mapa.get('carro')}`) //aqui estamos exibindo o valor da chave 'curso' que é 'fusca'

//verificando se uma chave existe//
if(mapa.has('co')){ // usamos o has()para fazer a verificação e saber se a chave existe,ele retorna true ou false //
    console.log('chave encontrada')
}else{
    console.log('chave não encontrada')
}


// //pecorrendo a coleção com o forEarch//

// mapa.forEach((ele,i)=>{
//     console.log(`key:${i} valor:${ele}`)
// });

// //deletando com  delete//
// mapa.delete('carro')// aqui deletamos o valor que estava na chave carro.
// console.log(mapa)

let maps = new Map();

console.log(maps.set('1',1))
console.log(maps.get('1'))

