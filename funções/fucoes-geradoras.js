// Vamos aprender funções geradoras//
// Funções geradoras tem seu retorno adiado até o momento  que  a gente precise desse retorno em algum  momento//

function* formulario(){
 let nome = yield 'Genesis';
  let sobrenome = yield  'Souza'; // 'yield' pausa a execução da função e retorna o valor//
  let idade =  yield 18;
  return `Meu nome completo é ${nome} ${sobrenome} e tenho ${idade}`;
}
let ret = formulario();
console.log(ret.next().value)// Aqui estamos retornando o  interador pra depois  retornar//
console.log(ret.next('Genesis').value);
console.log(ret.next('souza').value);
console.log(ret.next(18).value);
