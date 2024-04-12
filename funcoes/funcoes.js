 let h1 = document.querySelector('h1');
 let but = document.querySelector('button');
 let h2= document.querySelector('h2')
 let cont = 0 ;
 let i = 0
 but.addEventListener('click', clicou = ()=>{
      h1.innerHTML='Tenha fé em Deus';
     h2.innerHTML= cont ++
     
 })
 
//funções 

function carro(nome){
     return nome
}


let res = carro('portugal');
console.log(res)


// funcões com retornos//

function retorno(){
     let nome = 'Gênesis';
     let sobreNome = 'Souza Almeida';
     return `Seu nome completo é ${nome} ${sobreNome}`; // usamos o 'return ' para retornar valor em uma function,lembrando que so podemos ultilizar somente um 'return 'no escopo da função
}
let ret = retorno();
console.log(ret)

// funções parametrizadas//

function calc(n2=0,n1=0){  //podemos assumir um valor padrão para que não de 'NAN' N2 = 0 N1 = 0///
     
     return n2 + n1;
}
console.log(calc(21,10));
let n = 0
n++



let buscar = (a,i)=>{
     while(a<=10){
          console.log('jesus salva') 
          console.log(n) 
          n+=2
          a++
     }
   
}
buscar(1)

