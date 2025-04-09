const p = document.querySelector('#timer');
const b = document.querySelector('#go');

let t =  new Date() //pegando timestamp

let c = ()=>{
    const tmptual = Date.now()
    let cont =tmptual-t
    let sec =Math.floor( cont/1000)

   
 console.log(sec)
   
}

let s = setInterval(c,100)

