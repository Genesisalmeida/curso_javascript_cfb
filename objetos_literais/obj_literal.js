const obj = document.querySelector(".obj");

// let computador = {
//     cpu:'i9',
//     ram:'64gb',
//     hd:'2tb'
// }
// obj.innerText= `CPU:${computador.cpu} 
//  RAM:${computador.ram} 
//   HD:${computador.hd}`

  let computadores = [
    {
        cpu:'i9',
        ram:'64gb',
        hd:'2tb'
    },
    {
        cpu:'i7',
        ram:'64gb',
        hd:'2tb'
    },
    {
        cpu:'i5',
        ram:'64gb',
        hd:'2tb'
    },
    {
        cpu:'i9',
        ram:'64gb',
        hd:'2tb'
    },
    {
        cpu:'i7',
        ram:'64gb',
        hd:'2tb'
    },
    {
        cpu:'i5',
        ram:'64gb',
        hd:'2tb'
    }
  ]
 let comp = computadores.map((ele)=>{
    const div = document.createElement("div")
    div.setAttribute('class','computador')
    div.innerHTML = `computador:${ele.cpu } 
    ${ele.hd } 
    ${ele.ram}`
    obj.appendChild(div)
 
 })
 // Clonando objetos //
 const c = Object.assign({},computadores) // object.assign serve para clonar os obj

 delete(computadores[0].cpu) // Como deletar um obj

 
