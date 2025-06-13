import { Login } from "./login.js";
import{ Cxmsg }from"../../projeto_caixa-msg/cxmsg.js";

const callbackok =()=>{
    console.log('tudo ok')
}
   
const callbacknaook =()=>{
    Cxmsg.mostrar(
    {
      cor: `#1b2a41`, // cor do cabeçalho e rodapé da caixa
      tipo: "ok",     // tipo da caixa ("ok" ou "sn")
    },
    "Erro de Login",   // título da caixa
    "Usuário ou senha inválidos!"  // mensagem dentro da caixa
  );
} 
Login.login(callbackok,callbacknaook);