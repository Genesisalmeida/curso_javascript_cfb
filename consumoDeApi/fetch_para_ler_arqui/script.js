
const texto = document.querySelector('#texto');    
const endpoint ="texto.txt"  
async function requi (){
 try{
   const res = await fetch(endpoint);
   const dado = await res.json() ;
   console.log(dado.curso1);
 }catch(erro){
   console.log('Erro',erro)
 }
}

requi()