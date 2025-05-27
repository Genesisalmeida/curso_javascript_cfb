import{ Cxmsg }from"./cxmsg.js";

 const config={
    cor:"#d3dbe1",
    tipo:"ok",
    textos:["SIM","NÃO"],
    comando_sn:()=>{}
 }

const fsim=()=>{
    console.log('sim')
}
 const configOriginal = {
    cor: "#d3dbe1",
    tipo: "ok",
    textos: ["SIM", "NÃO"],
    comando_sn: () => {}
};

const btn_msg = document.querySelector("#btn_msg");
const btn_msg2 = document.querySelector("#btn_msg2");
const btn_msg3= document.querySelector("#btn_msg3");



btn_msg.addEventListener('click',()=>{
     config.tipo="ok"
    Cxmsg.mostrar(config,"CFB","Cursos de js")
   
  
})
btn_msg2.addEventListener('click',()=>{
     config.tipo="sn"
     config.comando_sn=()=>{
        fsim()
    }
    Cxmsg.mostrar(config,"CFB","Curso de PHP")

})
btn_msg3.addEventListener('click',()=>{
    
    const configTemp = { ...configOriginal };
    configTemp.tipo = "sn";
    configTemp.textos = ["sair", "voltar"];
    Cxmsg.mostrar(configTemp, "CFB", "Curso de JAVA")
    
})
