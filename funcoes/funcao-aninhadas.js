// funções aninhada//

// funções aninhadas são funções dentro da outra//

let soma= (...valores)=>{
        let somar = (val)=>{
            let n = 0;
            for(i of val){
                n+= i;
            }
             return n;
        } 
        return somar(valores)
}
console.log(soma(10,12));