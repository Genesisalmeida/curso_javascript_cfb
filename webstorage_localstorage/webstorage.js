const input =document.querySelector("#texto");
const p =document.querySelector("#p_texto");
const but =document.querySelector("#but");
let valor = null
    let listTarefa = []
but.addEventListener('click',(evt)=>{
    valor = input.value;
    listTarefa.push(valor);
    localStorage.setItem("Tarefa",listTarefa);
loandTare()
     // let posicaIndex=localStorage.key(0)//passamos um index e ele rotarna o nome chave que esta nesse idex
  // alert(localStorage.getItem(posicaIndex)) // pegamos o valaor que esta na chave  0
})

let loandTare = ()=>{
 listTarefa.forEach((ele)=>{
    console.log(ele)
})
}


//localStorage.clear() // limpar as chaves locais criadas
