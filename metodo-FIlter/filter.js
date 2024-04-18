// //metodo 'filter' ele é usado no array para fazer  a filtragem e retornar determinados elementos filtrados//


// const idades = [12,25,69,35,26,8,89];
// const maior = idades.filter((valor)=>{ // no filter alem de retornar o valor podemos retornar 'indice'e o 'array'
//     if(valor >= 18)
//     return v,indice,array

// })

// console.log(maior);


//praticando método filter//

const h1 = [...document.querySelectorAll('h1')];
h1.filter((ele,posicao)=>{
   if(posicao === 2){ //aqui estou usando a posição(indice) para alterar a cor do elemento na posição x
       ele.style.color='red';
   }
})
