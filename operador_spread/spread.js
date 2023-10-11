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

