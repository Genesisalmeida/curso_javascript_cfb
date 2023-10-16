// break e continue em java script//
 

let n = 0 ; 
let cont = 100;
while(n <= cont){
    console.log(n)
    if(n>=20){      // aui um exemplo do break sendo execultado
        break
        
    }
  n++
}


//continue

for(let i = 0; i<=10; i++){
    if(i%2 == 0){
        continue; // ele para a execução do mod 2 e retorna os numeros impares
        }
     console.log('numeros pares: '+ i )
        

    
}