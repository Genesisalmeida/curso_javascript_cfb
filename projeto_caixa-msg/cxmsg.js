class Cxmsg {
    static cor = null;
    static destino = null;
    static divmsg = null;
    static tipo = null;
    static comando_sn = null;
    static textos = [];

    static mostrar = (config, eltitulo, texto) => {
        this.cor = config.cor || "#ccc";
        this.tipo = config.tipo || "ok";
        this.textos = config.textos || ["Sim", "Não"];
        this.comando_sn = config.comando_sn || (() => {});
        this.destino = document.body;
        this.eltitulo = eltitulo;
        this.texto = texto;

        // Criar fundo escurecido
        this.divmsg = document.createElement("div");
        const estilo_divmsg = `
            display:flex;
            justify-content:center;
            align-items:center;
            position:fixed;
            top:0;
            left:0;
            width:100vw;
            height:100vh;
            background-color:rgba(0,0,0,0.7);
            z-index:9999;
        `;
        this.divmsg.setAttribute("style", estilo_divmsg);
        this.destino.appendChild(this.divmsg);

        // Criar caixa da mensagem
        const areacaixamsg = document.createElement("div");
        const estilo_caixamsg = `
            display: flex;
            flex-direction: column;
            background-color: #d3dbe1;
            justify-content: space-between;
            align-items: center;
            border: 1px solid black;
            width: 300px;
            min-height: 150px;
            border-radius: 8px;
            overflow: hidden;
        `;
        areacaixamsg.setAttribute("style", estilo_caixamsg);
        this.divmsg.appendChild(areacaixamsg);

        // Título
        const msgtitulo = document.createElement("div");
        msgtitulo.innerText = this.eltitulo;
        msgtitulo.setAttribute("style", `
            background-color: ${this.cor};
            width: 100%;
            text-align: center;
            font-weight: bold;
            padding: 10px;
        `);
        areacaixamsg.appendChild(msgtitulo);

        // Texto principal
        const areatexto = document.createElement("div");
        areatexto.innerHTML = this.texto;
        areatexto.setAttribute("style", `
            background-color: #fff;
            text-align: center;
            padding: 20px;
            width: 100%;
            flex: 1;
        `);
        areacaixamsg.appendChild(areatexto);

        // Rodapé com botões
        const rodape = document.createElement("div");
        rodape.setAttribute("style", `
            background-color: ${this.cor};
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 10px;
            padding: 10px;
        `);
        areacaixamsg.appendChild(rodape);

        if (this.tipo === "ok") {
            const btn_ok = document.createElement("button");
            btn_ok.innerText = "OK";
            btn_ok.setAttribute("style", `
                padding: 8px 16px;
                background-color: #0e65fb;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            `);
            btn_ok.addEventListener("click", () => this.ocultar());
            rodape.appendChild(btn_ok);
        } else if (this.tipo === "sn") {
            const btn_sim = document.createElement("button");
            btn_sim.innerText = this.textos[0];
            btn_sim.setAttribute("style", `
                padding: 8px 16px;
                background-color: #0e65fb;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            `);
            btn_sim.addEventListener("click", () => {
                this.comando_sn();
                this.ocultar();
            });

            const btn_nao = document.createElement("button");
            btn_nao.innerText = this.textos[1];
            btn_nao.setAttribute("style", `
                padding: 8px 16px;
                background-color: #ccc;
                color: black;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            `);
            btn_nao.addEventListener("click", () => this.ocultar());

            rodape.appendChild(btn_sim);
            rodape.appendChild(btn_nao);
        }
    }

    static ocultar = () => {
        if (this.divmsg) {
            this.divmsg.remove();
        }
    }
}

export { Cxmsg };

