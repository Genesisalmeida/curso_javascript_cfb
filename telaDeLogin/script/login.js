
// import{ Cxmsg }from"../../projeto_caixa-msg/cxmsg.js"   

class Login{
    
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static styleCss = null;
    static callbackok = null;
    static callbacknaook = null;
    static configu = {
        cor:"#1b2a41",
        img:"assets/img/imgteste.avif"
    }
    static endpoint = "https://b91844b7-11c0-44d6-8dab-24060a065b41-00-296o7qsd53am2.picard.replit.dev/";

    
    static login=(callbackok,callbacknaook,config=null)=>{
        if (config!=null) {
            this.configu.cor = config.cor;
        }
        this.callbackok=()=>{
            callbackok()
        }
        this.callbacknaook=()=>{
            callbacknaook()
        }

        this.styleCss = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .Flogin{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: rgba(0, 0, 0, 0.687);
        }
        .baseLogin{
            display: flex;
            justify-content: center;
            align-items: stretch;
            width:50%;
        
        }
        .elementosLogin{
            display: flex;
            background-color: #eee;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;
            border-radius: 10px 0px 0px 10px;
            width: 50%;
        
        }
        .logoLogin{
            display: flex;
            background-color: #bbb;
            justify-content: center;
            align-items: center;
            padding: 10px;
            border-radius: 0px 10px 10px 0px;
            width: 50%;
        }
        .campoLogin{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 10px;
        }
        .campoLogin label{
            font-size: 18px;
        }
        .campoLogin input{
            font-size: 18px;
            padding: 5px;
            background-color: #fff;
            border-radius: 6px;
        }
        .botoesLogin{
            display: flex;
            justify-content: space-around;
            padding: 0px 30px 10px;
            align-items: center;
            width: 100%;
        }
        .botoesLogin button{
            cursor: pointer;
            background-color:${this.configu.cor};
            width: 100px;
            color: #00a5e3;
            border-radius: 5px;
            padding: 8px 8px;
        }
        img{
            width:100px;
            border-radius:30%;
        }`

    
const style = document.createElement("style");
style.setAttribute("rel","stylesheet");
style.setAttribute("id","id_estiloLogin");
style.setAttribute("type","text/css");
style.innerHTML=this.styleCss;
document.head.appendChild(style);

 //criando html 

 const fundoLongin = document.createElement("div");
 fundoLongin.setAttribute("id", "Flogin");
 fundoLongin.setAttribute("class","Flogin");
 document.body.prepend(fundoLongin);

 const baseLogin = document.createElement("div");
 baseLogin.setAttribute("id", "baseLogin");
 baseLogin.setAttribute("class","baseLogin");
 fundoLongin.appendChild(baseLogin);

 const elementosLogin = document.createElement("div");
 elementosLogin.setAttribute("id", "elementosLogin");
 elementosLogin.setAttribute("class","elementosLogin");
 baseLogin.appendChild(elementosLogin);

 const campoLogin = document.createElement("div");
 campoLogin.setAttribute("id", "campoLogin");
 campoLogin.setAttribute("class","campoLogin");
 elementosLogin.appendChild(campoLogin);

 const label = document.createElement("label");
 label.innerText="Usarname";
 campoLogin.appendChild(label);

 const input = document.createElement("input");
 input.setAttribute("type","text");
 input.setAttribute("name","f_username");
 input.setAttribute("id","f_username");
 campoLogin.appendChild(input);

 const campoLogin2 = document.createElement("div");
 campoLogin2.setAttribute("id", "campoLogin");
 campoLogin2.setAttribute("class","campoLogin");
 elementosLogin.appendChild(campoLogin2);

 const label2 = document.createElement("label");
 label2.innerText="Senha";
 campoLogin.appendChild(label2);

 const input2 = document.createElement("input");
 input2.setAttribute("type","password");
 input2.setAttribute("name","f_senha");
 input2.setAttribute("id","f_senha");
 campoLogin.appendChild(input2);

const botoesLogin = document.createElement("div");
botoesLogin.setAttribute("class","botoesLogin")
elementosLogin.appendChild(botoesLogin)

const btn = document.createElement("button");
btn.setAttribute("id","btn_login");
btn.innerHTML="Login";

btn.addEventListener('click',()=>{
    this.verificaLogin()
})

botoesLogin.appendChild(btn);

const btnCance = document.createElement("button");
btnCance.setAttribute("id","btn_cancelar");
btnCance.innerHTML="Cancelar";
btnCance.addEventListener('click',()=>{
 this.fechar();
})
botoesLogin.appendChild(btnCance);

const logoLogin = document.createElement("div");
logoLogin.setAttribute("id","logoLogin");
logoLogin.setAttribute("class","logoLogin")
baseLogin.appendChild(logoLogin)

const img = document.createElement("img");
img.setAttribute("src",this.configu.img); 
img.setAttribute("alt","CFBCursos")
logoLogin.appendChild(img);

}

        static verificaLogin=()=>{


            let mat = document.querySelector("#f_username").value
            let  pas =document.querySelector("#f_senha").value;
  
            const endpoint =`https://31d8b925-8e39-4cd3-94c5-8309c71b769b-00-2284hqe55rgzq.worf.replit.dev/?matricula=${mat}&senha=${pas}`
            fetch(endpoint)
            .then(res=>res.json())
            .then(res=>{
                if(res){
                    this.logado=true;
                    this.matlogado=mat;
                    this.nomelogado=res.nome;
                    this.acessologado=res.acesso;
                    this.callbackok();
                    this.fechar();
                }else{
                    this.callbacknaook();
                }
            })
        }
           
    
        static  fechar=()=>{
            const fundoLongin=document.querySelector("#Flogin");
            fundoLongin.remove();
            const id_estiloLogin=document.querySelector("#id_estiloLogin");
            id_estiloLogin.remove();
        }       
    }


export{Login};