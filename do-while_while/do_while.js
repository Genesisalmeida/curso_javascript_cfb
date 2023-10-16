// Do While//
// diferença entre loop while e do-while//

// while fazemos teste primeiro,execulta o bloco depois ,no do-while ele execulta o bloco primeiro,depois
//faz o teste logico  //


// while
let n = 10;
while(n<10){
    comsole.log('binho');
    
}
console.log('fim do programa');

// do while

let n1 = 1;

do{
    console.log('binho');
    n1++
}while(n1<12)


// exercicio//

let carros = ['gol','kadet','uno','s10'];
let i = 0;
do{
    console.log(carros[i]);
    i++
    
}while(i <= carros.length);