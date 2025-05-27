class Cxmsg {
    static cor = null;
    static destino = null;
    static divmsg = null;
    static tipo = null;
    static comando_sn = null;
    static textos =[]


    static mostrar = (config,eltitulo, texto) => {
        this.cor=config.cor;
        this.tipo = config.tipo;
        this.textos = config.textos
        this.comando_sn = ()=>{config.comando_sn()};
        this.destino = document.body;
        this.eltitulo = eltitulo;
        this.texto = texto;
        this.divmsg = document.createElement("div");
        const estilo_divmsg = `
           display:flex;
           justify-content:center;
           align-items: center;
           position:absolute;
           top:0px;
           left:0px;
           width:100%;
           height:100vh;
           background-color:rgba(0,0,0,0.7)
        `;
        this.divmsg.setAttribute("class", "div");
        this.divmsg.setAttribute("style", estilo_divmsg);
        this.destino.prepend(this.divmsg);

        const areacaixamsg = document.createElement("div");
        const estilo_caixamsg = `
        display: flex;
        flex-direction: column;
        background-color:#d3dbe1;
        justify-content: space-between;
        align-items: center;
        border: 1px solid black;
        width: 15vw;
        height: 100px;
        `;
        areacaixamsg.setAttribute("id", "areaCaixa");
        areacaixamsg.setAttribute("style", estilo_caixamsg);
        this.divmsg.prepend(areacaixamsg);

        const msgtitulo = document.createElement("div");
        msgtitulo.innerText = `${this.eltitulo}`;
        const estiloTitulo = `
        background-color:${this.cor};
        width: 100%;
        text-align: center;
        `;
        msgtitulo.setAttribute("class", "titulo");
        msgtitulo.setAttribute("style", estiloTitulo);
        areacaixamsg.prepend(msgtitulo);

        const areatexto = document.createElement("div");
        areatexto.innerHTML = `${this.texto}`;
        areatexto.setAttribute('class', 'texto');
        const estiloTexto = `
        background-color: #fff;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        `;
        areatexto.setAttribute('style', estiloTexto);
        areacaixamsg.append(areatexto);


        const rodaPe = document.createElement("div");
        rodaPe.setAttribute("class","rodape")
        const estiloRodape=`
        background-color:${this.cor};
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content:space-around ;
        align-items: center;
        `
        rodaPe.setAttribute("style",estiloRodape)
        areacaixamsg.appendChild(rodaPe)
        if(this.tipo == "ok"){
        const buton_ok = document.createElement("button");
        buton_ok.setAttribute("class", "but");
        const butonEstilo = `
        padding:3px;
        background-color: #0e65fb;
        width:100px;
        flex-direction:row: 
        border-radius: 5px;
        `;
        buton_ok.setAttribute("style", butonEstilo);
        buton_ok.innerHTML = 'ok';
        
      
        buton_ok.addEventListener('click', () => {
            this.ocultar();
        });
         rodaPe.append(buton_ok);
        }
        else if (this.tipo =="sn"){
            const buton_sim = document.createElement("button");
            buton_sim.setAttribute("class", "but");
            const butonEstilo = `
                padding:3px;
                background-color: #0e65fb;
                border: 1px solid #0e65fb;
                width:80px;
                border-radius: 5px;
        `;
            buton_sim.setAttribute("style", butonEstilo);
            buton_sim.innerHTML = this.textos[0];
      
            buton_sim.addEventListener('click', () => {
             this.comando_sn()
            this.ocultar();
        });
           rodaPe.append(buton_sim);

            const buton_nao = document.createElement("button");
            buton_nao.setAttribute("class","but")
            buton_nao.setAttribute("style", butonEstilo)
            buton_nao.innerHTML=this.textos[1];
            buton_nao.addEventListener('click', () => {
                this.ocultar();
            });
            rodaPe.append(buton_nao)
        }
    } 

    static ocultar = () => {
        this.divmsg.remove();
    }
}

export { Cxmsg };
