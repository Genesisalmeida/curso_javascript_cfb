// const temp =document.querySelector('#temperatura');
// const nivel =document.querySelector('#nivel');
// const press =document.querySelector('#pressao');
const but = document.querySelector('#but');
// const parar = document.querySelector('#stop');
// const final = document.querySelector("#finaliz");
// let int ;
// const endpoint =" https://b91844b7-11c0-44d6-8dab-24060a065b41-00-296o7qsd53am2.picard.replit.dev/";

// but.addEventListener('click',()=>{
//  if(int)clearInterval(int);
//   int = setInterval(intevar,2000);
   
// });
// const intevar = ()=>{
//      fetch(endpoint)
//     .then(res=>res.json())// metodo then recebe o retorno do fetch
//     .then(dados=>{//aqui o then ja recebe os dados tratados em texto
//         temp.innerHTML=`Temperatura: ${dados.temperatura}`;
//         nivel.innerHTML=`Nível: ${dados.nivel}`;
//         press.innerHTML=`Pressão: ${dados.pressao}`;
//         console.log('execultando');
//     });
   
// };
   
// parar.addEventListener('click',()=>{
//         final.innerHTML='Fim da requizição';
//         temp.innerHTML='';
//         nivel.innerHTML='';
//         press.innerHTML='';
//     clearInterval(int);
// });


// AULA COMO ENVIAR DADOS

// const dados={
//     nome:'genesis',
//     email:'genesisalmeida60@gmail.com',
//     curso:'java'
// }

// let cabecalho={
//     method:"POST",
//     body:JSON.stringify(dados)
// }
// but.addEventListener('click',(e)=>{
//     e.stopPropagation()
//   gravarDados();
// });

// const gravarDados=()=>{
//     fetch(endpoint,cabecalho)
//     .then(res=>res.json())
//     .then(ret=>{
//         console.log(ret)
//     })
     
// }

const raca = document.querySelector('#raca')
const grupoRaca  = document.querySelector('#g_raca')
const espectativaVida  = document.querySelector('#e_vida')
const temperamento = document.querySelector('#temperamento')
const div = document.querySelector('.container')
let controle


const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY"
  });
  
  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  const http ="https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

async function pegarDado(){
  try{
    const resposta = await fetch(http,
      {
      headers:{"Content-type": "application/json", 
      "x-api-key":"DEMO-API-KEY" // chave da api
    }});
    const dados = await resposta.json();
    dogData(dados)
  }catch(erro){
    console.log('Erro na requisição', erro)
  }
}
  
// fetch(http, requestOptions)
//     .then(response => response.json())
//     .then(resut=>dogData(resut))
//     .catch(error => console.log('error', error))
 
  


    const dogData=(resut)=>{
        
       grupoRaca.innerHTML =`Grupo da raça: ${ resut[0].breeds[0].breed_group}`;
       if(grupoRaca == undefined){
            grupoRaca.innerHTML ='Grupo não indetificado';
       }
       raca.innerHTML =`Raça: ${ resut[0].breeds[0].name}`;
       espectativaVida.innerHTML =`Espectativa de vida: ${ resut[0].breeds[0].life_span}`;
       temperamento.innerHTML =`Temperamento: ${ resut[0].breeds[0].temperament}`;
        
        elementos( resut[0].url);  
     
    }

    const elementos = (imgUrl)=>{
     const img = document.createElement("img");
        img.style.width="300px";
        img.style.height="300px"
        img.src =imgUrl
        div.appendChild(img)
    
    }
    but.addEventListener('click',()=>{
       
       location.reload(   ); // Recarrega a página
         
    });
pegarDado()