const butyes = document.querySelector('.butYes');
const butno = document.querySelector('.butNo');

    const promise= new Promise((resolve,reject)=>{// resolve se a operação de certo// reject se dé errado (Esses nomes podem ser qualquer um)
        const sucesso = true;
        setTimeout(()=>{
            if(sucesso){
                resolve('operação bem resolvida')
            }else{
                reject('falha na operacão')
            }
        },3000);
    });



promise.then(resultado=>{
    console.log(resultado)
})
.catch(erro=>{
    console.error(erro)
})