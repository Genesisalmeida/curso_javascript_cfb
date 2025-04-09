
let pais = ['Disponibilidade','Qualidade','Performance'];
const http = "https://b91844b7-11c0-44d6-8dab-24060a065b41-00-296o7qsd53am2.picard.replit.dev/"
let valores =[]
let grafico = null
   const texto = document.querySelector('#texto');    
    
   async function geraGrafico (){
    try{
      const res = await fetch(http);
      const dado = await res.json();
      //valores = Object.values(dado);// pega os valores  do objeto diretamente;

      //uma forma de fazer adicionando cada objeto na array

      valores[0]=dado.disponibilidade
      valores[1]=dado.qualidade
      valores[2]=dado.performance
      if(grafico){
        grafico.destroy()
      }

    }catch(erro){
      console.log('Erro',erro)
    }

     grafico =  new Chart(ctx, {
          
          type: 'bar',
          data: {
            labels: pais,
            datasets: [{
              label: 'indicadores',
              data: valores,
              backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
              borderWidth: 1
              
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });   
      
   }

const ctx = document.querySelector('#grafico');


 geraGrafico() 
 setInterval(geraGrafico,5000)