// metodo some//
// O método some() em JavaScript é uma maneira de verificar se pelo menos um dos elementos em um array satisfaz uma determinada condição. Ele retorna true se pelo menos um elemento passar no teste especificado pela função de callback, caso contrário, retorna false.

// Em resumo, o some() é como uma pergunta: "Existe pelo menos um elemento que atenda a essa condição?" Se a resposta for sim para pelo menos um elemento, o some() retorna true; se não, retorna false. É útil quando você precisa saber se pelo menos uma condição é verdadeira em um array.


const divArray = document.querySelector("#array");
const button = document.querySelector("#btnPesquisar");
const box_result = document.querySelector("#resultado")
const elemento = [2,2,5,16,19,11];
divArray.innerHTML=` [${elemento}]`;

button.addEventListener('click',()=>{
    const ret = elemento.some((elm, posi)=>{
        if(elm<18){
              box_result.innerHTML='menor idade na posição:' + posi;
        }
        return  elm >=18;

    })
    if(ret){
        box_result.innerHTML='maior de idade';
    }
});



const numeros = [10,1,2,3];


let ret  = numeros.some((ele)=>{
    return ele >= 18
})
console.log(ret)
