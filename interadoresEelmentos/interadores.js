//interadores//

//coleções interáveis em javascript são :
//Arrays
//String
//Map
//Sets

const valores=[14,25,33,99];
const interador =valores[Symbol.iterator]()

let n =0
while(n<5){
    console.log(interador.next())
    n++
   
}


//coleções interaveis permite trabalhar com interador//
// const array = [1, 2, 3];
// array.forEach(elemento => console.log(elemento));