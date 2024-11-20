// import getCurso,{ car,cores} from "../js_export/export.js";

// console.log(car)
// console.log(cores)
// console.log(getCurso())



//IMPORTAÇÕES NOMEADAS


// import {cores as c,car as B}from"../js_export/export.js"  // aqui estamos renomeando cores para 'c' usando 'as' ,agora podemos ultilizar cores chamando c.
// console.log(c)// usando cores ja renomeada com 'c';
import* as m_cursos from"../js_export/export.js"// Uma forma de exporta tudo  de um so vez, usando' *' e o 'as ' seguido do nome que vc escolher para nomear o import, ex: m_cursos 

console.log(m_cursos.car) // usando os arquivos exportado,colocamos m_cursos seguido de '.' ponto  para escolhermos o que queremos usar;

console.log(m_cursos.cores)