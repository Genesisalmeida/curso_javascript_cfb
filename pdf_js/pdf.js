

const tabela = document.querySelector('.tabela').innerHTML;
const btn = document.querySelector ('.btn');
const tam = "table {width: 100%; font: 25px Calibre;}";
const estilo = "table,th,td {border: solid 2px black; border-collapse: collapse; padding:4px 8px;text-align: center;}" ;

btn.addEventListener('click', (evt)=>{
    const cssStyle = `<style>${tam}${estilo}</style>`;
    const win = window.open('','','height=700,width=700');
    win.document.write(`<html><head> <title>CFB cursos </title>${cssStyle} </head><body> ${tabela} </body></html>`);
    
    win.print();
})


