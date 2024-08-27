const url  = document.querySelector('#url');
const btn = document.querySelector('#but');

btn.addEventListener('click',(evt)=>{
    window.location = url.value  
//   window.location ='index.html' // Redireciona o navegador para a URL especificada, que neste caso é 'index.html'.
//   window.location.replace('')//Não adiciona a nova página ao histórico, impedindo o usuário de voltar para a página anterior.
//   window.location.reload()// ele recarrega a pagina

  //window.history.back() // Se você estava na Página B e usar window.history.back(), o navegador voltará para a Página A.
  //console.log(window.history.length) // retorna o numeros  de entradas no histórico de navegação atual
   
 // window.history.go(1) // Se você está na Página C e usa window.history.go(-2), o navegador voltará duas páginas no histórico, indo para a Página A.


})