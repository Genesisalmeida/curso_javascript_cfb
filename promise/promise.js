const butyes = document.querySelector('.butYes');
    // const promise= new Promise((resolve,reject)=>{// resolve se a operação de certo// reject se dé errado (Esses nomes podem ser qualquer um)
    //     const sucesso = true;
    //     setTimeout(()=>{
    //         if(sucesso){
    //             resolve('operação bem resolvida')
    //         }else{
    //             reject('falha na operacão')
    //         }
    //     },3000);
    // });



// promise.then(resultado=>{
//     console.log(resultado)
// })
// .catch(erro=>{
//     console.error(erro)
// })



// aprendendo promise com funções

const numero = document.querySelector('.numero')
butyes.addEventListener('click',()=>{
    numero.innerHTML='Processando....'
 
    minhaPromese()
        .then((ok)=>{
            numero.innerHTML=ok
            numero.classList.add('ok')
            numero.classList.remove('erro')
            console.log(re)
        }).catch((erro)=>{
            numero.innerHTML=erro
            numero.classList.remove('ok')
            numero.classList.add('erro')
        })
})

const minhaPromese = ()=>{
    let promise = new Promise((res,reje)=>{
        let go = true
        setTimeout(()=>{
            if(go){
                res('Tudo ok')
            }else{
                reje('Deu error')
            }
        },3000)
    })
    return promise
}
console.log(minhaPromese())
numero.innerHTML='Esperando....'
