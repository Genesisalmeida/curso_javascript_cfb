const p_array = document.querySelector('#array');
const pesquisar = document.querySelector('#txt_pesquisa');
const button = document.querySelector('#btnPesquisar');
const resultado = document.querySelector('#resultado');

const elementos_array = ['bola','carro','casa','camisa','estadio'];
p_array.innerHTML=`[${elementos_array}]`;

button.addEventListener('click', ()=>{
  elementos_array.find((ele,i)=>{
    const result = resultado
    if(ele.toUpperCase() === pesquisar.value.toUpperCase()){
        return result.innerHTML= ` ${ele} na posição ${i} existe no array `
    }else{
        result.innerHTML= ` ${pesquisar.value} não encontrado`
    }

  })
})