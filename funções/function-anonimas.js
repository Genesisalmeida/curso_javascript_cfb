// function anônimas//

let anonima = function(...valore){
    let soma= 10;
    for (i in valore){
        soma*= valore[i]; // return  colocamos fora do 'for' pq se colocamos dentro  do for ele ja retorna e para o loop
        
    }
    return soma
}

console.log(anonima(10,20))

let name = ['binho', 'pablo'];

let nome = function(...name){ // lembrado que aqui 'spread'//
    return name;
}

console.log(nome(name))


// function anônima contrutor//


let f = new Function('v1', 'v2', 'return v1+v2')
console.log(f(10,10))