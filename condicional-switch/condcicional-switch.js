// Condicional Switch//

let fardamento = 'dark';

switch(fardamento){
    case 'red':
        console.log('Sua farda é vermelha,você é um bombeiro');
        break;
    case 'green':
        console.log('Sua farda é verde,você é um PM');
        break;
    case 'dark': case 'black': case 'pink':  // podemos colocar mais de um  case na mesma linha para executar um mesmo bloco//
        console.log('Farda não indetificada');
        console.log('faça o cadastro do fardamento')
        break;

    default:
        console.log('Farda desconhecida') ;
        break;    
}


var foo = 5;
var output = "Output: ";
switch (foo) {
  case 10:
    output += "Então ";
  case 1:
    output += "Qual ";
    output += "É ";
  case 2:
    output += "O Seu ";
  case 3:
    output += "Nome";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Favor escolher um número de 0 à 6!");
}




