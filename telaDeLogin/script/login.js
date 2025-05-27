class Login{
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static endpoint = "https://b91844b7-11c0-44d6-8dab-24060a065b41-00-296o7qsd53am2.picard.replit.dev/";
    //https://loginv1.cfbcursos.rpl.co/?matricula=123$senha=321
    static login=(mat,pas)=>{
    this.endpoint+=`?matricula=${mat}&senha=${pas}`
         fetch(this.endpoint)
         .then(res=>res.json())
         .then(res=>{
            if(res){
                this.logado = true;
                this.matlogado = mat;
                this.acessologado=res.acesso;
                    console.log(res);
                }else{
                    console.log('usuário não encontrado')
                }
            }
         )}
    //    const buscarDados = async ()=>{
    //     this.endpoint+=`?matricula=${mat}&senha=${pas}`
    //         try {
    //             const res = await fetch(this.endpoint)
    //             const data = res.json()
    //             if(data){
    //                 this.logado = true;
    //                 this.matlogado = mat;
    //                 this.acessologado=data.acesso;
    //                 console.log(data)
    //             }else{
    //                 console.log('usuário não encontrado')
    //             }
    //          }
    //          catch(erro){
    //             console.log("Erro na requisição",erro)
    //          }
    //     }
    //     buscarDados()
    }

export{Login}