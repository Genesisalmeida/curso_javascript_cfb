let inp1 =document.querySelector('#inp1')
let inp2 = document.querySelector('#inp2');
const res = document.querySelector('#res');
const but1 = document.querySelector('#adi');
const but2 = document.querySelector('#sub');
const but3 = document.querySelector('#mult');
const but4 = document.querySelector('#divi');
parseFloat(res.value)
but1.addEventListener('click',()=>{
    res.value=''
    let  inpts = [parseFloat(inp1.value),parseFloat(inp2.value)];
    res.value = `O resultado é ${op[0](inpts)}!`;
});
but2.addEventListener('click',()=>{
    res.value=''
    let  inpts = [parseInt(inp1.value),parseFloat(inp2.value)];
    res.value = `O resultado é ${op[1](inpts)}!`;
});
but3.addEventListener('click',()=>{
    res.value=''
    let  inpts = [parseFloat(inp1.value),parseFloat(inp2.value)];
    res.value = `O resultado é ${op[2](inpts)}!`;
});
but4.addEventListener('click',()=>{
    let  inpts = [parseFloat(inp1.value),parseFloat(inp2.value)];
    res.value = `O resultado é ${op[3](inpts)}!`;
})

let op = [
    (val)=>{
        let res = 0
        for(v of val){
          res+=v  
        }
        return res
    },
    (val)=>{
        let res = val[0]; // Inicializa res com o primeiro valor de val
        for (let i = 1; i < val.length; i++) { // Começa a partir do segundo valor
            res -= val[i]; // Subtrai res pelo valor atual em val
        }
        return res;
    },
    (val)=>{
        let res= 1
        for(v of val){
          res*=v  
        }
        return res
    },
    (val) => {
        let res = val[0]; // Inicializa res com o primeiro valor de val
        for (let i = 1; i < val.length; i++) { // Começa a partir do segundo valor
            res /= val[i]; // Divide res pelo valor atual em val
        }
        return res;
    },
    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
    
];
