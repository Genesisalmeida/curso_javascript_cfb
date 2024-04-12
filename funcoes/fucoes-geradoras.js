// Vamos aprender funções geradoras//
// Funções geradoras tem seu retorno adiado até o momento  que  a gente precise desse retorno em algum  momento//

function* formulario(){
 let nome = yield 'Qual seu nome completo?';
  let idade = yield'Qual sua idade?'; // 'yield' pausa a execução da função e retorna o valor//

  return `Meu nome completo é ${nome}  e tenho ${idade} anos.`;
}
let ret = formulario(); // Aqui estamos chamando o interador da função,retorna o intereito
console.log(ret.next().value)// Aqui estamos exercutando o primeiro yield     
console.log(ret.next('Genesis Souza Almeida').value);
console.log(ret.next(18).value);




function* teste(){
  let i = 0;
  
  while(true){// loop infinito
    yield i++; 
  }
}

let res = teste();
for(let i= 0; i<=10; i++){
  console.log(res.next().value); 
}

//console.log(res.next().value);
//console.log(res.next().value);
//console.log(res.next().value); // esse console retorna idefinido  porque o yield não foi declarado//


