let n = ['binho','selma','sophia'];

const salvar = [...n]; // Aqui estamos usando  spread ,sintase '...', uma forma de simplificar 

console.log(salvar)


// exemplo do uso do spread com funções//
let soma=(a,b,c)=>{
    return a + b +c;
}
let n1 = [1,2,3]
let rest = soma(...n1); // usando spread como parâmetro
console.log(rest)

// exemplo com obejtos literais//

const jogador1 = {nome:'Binho', idade:24, habilidade:150,sexo:'Masculino'};
const jogador2 = {nome:'Pedro', idade:26, habilidade:150,time:'vasco',cidade:'Rio de janeiro'};
const jogador3 = {...jogador1,...jogador2};
console.log(jogador3)

let noms= ['joao','maria','pedro'];
let a = [...noms];

console.log(a);



let lista = ['ovos','peixe','leite'];

let c = [...lista]
console.log(lista)