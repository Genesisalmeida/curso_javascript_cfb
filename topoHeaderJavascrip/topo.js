// const head = document.head;
// const body= document.body;
// const estilo = " <link rel='stylesheet' type='text/css' href='topo.css'></link>" 
// const logo = 
//         "<div class='logo' id='logo'>"+
//             "<img src='logo.jpg' title='caminhão'/>"+
//         "</div>";

// const login =   
//           "<div class='login' id='login'>"+
//             "<p id='matricula' >Matrícula:<span></span></p>"+
//             "<p id='nome'>Nome:<span></span></p>"+
//         "</div>";



// head.innerHTML+=estilo;

// const topo = document.createElement("div");
// topo.setAttribute("id","topo");
// topo.setAttribute("class","topo");
// body.prepend(topo);
// topo.innerHTML+=logo
// topo.innerHTML+=login


// ADICIONANDO  FORMATAÇÃO DIRETAMENTE NO ARQUIVO JS//


const body= document.body;
const estilo = 
    `display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(111, 22, 22);`


const estiloLogo = `width: 250px;`    

const logo = 
        "<div class='logo' id='logo'>"+
            "<img src='logo.jpg'  'title='caminhão' style='"+estiloLogo+"' />"+
        "</div>";

const login =   
          "<div class='login' id='login'>"+
            "<p id='matricula' >Matrícula:<span></span></p>"+
            "<p id='nome'>Nome:<span></span></p>"+
        "</div>";





const topo = document.createElement("div");
topo.setAttribute("id","topo");
topo.setAttribute("style",estilo);
body.prepend(topo);
topo.innerHTML+=logo
topo.innerHTML+=login

        
        