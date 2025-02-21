// // Explessões regulares em javascript

// // 3. Símbolos importantes em RegEx

// // Símbolo	Significado	Exemplo
// // .    Qualquer caractere	/a.b/ casa com "acb", "aab", "axb"
// // \d	Qualquer dígito (0-9)	/\d+/ encontra "123" em "A123B"
// // \w	Qualquer letra;A a Z, número;0 a 1 ou _	/\w+/ encontra "JavaScript"
// // \s	Qualquer espaço em branco	/\s+/ encontra " "
// // ^	Começo da string	/^Hello/ encontra "Hello" em "Hello world", mas não em "Oi Hello"
// // $	Final da string	/world$/ encontra "world" em "Hello world"
// // *	Zero ou mais repetições	/a*/ encontra "aaaa", "a", ou ""
// // +	Uma ou mais repetições	/a+/ encontra "aaa" em "aaa" mas não ""
// // {n}	Exatamente n repetições	/\d{3}/ encontra "123" em "12345"
// // ( )	Grupo	/(\d{3})-(\d{2})/ encontra "123-45"

// // + → Significa uma ou mais ocorrências desse tipo de caractere

// // let nome =new String ('Genesis Souza Almeida');

// // console.log(nome);
// // console.log(nome.search(/g/i)); /// Retorna a posição da primeira ocorrência da letra "g", 
// // // ignorando se é maiúscula ou minúscula por causa da flag "i".

// // console.log(nome.match(/e/g))//console.log(nome.match(/e/g)); 
// // // Retorna um array com todas as ocorrências da letra "e" na string "nome".
// // // A flag "g" (global) faz com que encontre todas as correspondências, não apenas a primeira.

// // console.log(nome.match(/E/gi))//Retorna um array com todas as ocorrências da letra "E" na string "nome" mesmo passando letra maiúscula,pois estamos utilizando o 'gi',lembrando que o 'i' ignora as letras maiúsculas.
// // // Lembrando que podemos ultilizar expressões regulares

// // Espresões regulares aula2 , criando padrões //

// let nome = 'gaanesisss souzaaaa .@almeida 1993';
// // let email = 'genesis@gmail.com'

// // console.log(nome.match(/[ae]/g))//usamos coxetes para criar padrões, aqui estamos pesquisando 'a e'
// // console.log(nome.match(/[a-m|0-9]/g)) // O '-' significa até,e o (|) tabem.Estamos pesquisando de "a" ate 'm' tabem de 0 ate 9


// //  //Metacarcteres
// //  console.log(nome.match(/\d/gs)) // o (d) significa digits, ele retorna numerais
// //  console.log(nome.match(/\s/g)) // Retorna espaços
//  console.log(nome.match(/\bg/g)) //encontrará apenas as ocorrências da letra "a" que iniciam uma palavra:

//  //Quantificadores

//  console.log(nome.match(/a+|s+/g)) // 	Uma ou mais repetições	/a+/ encontra "aaa" em "baaanco como exemplo"
//  console.log(nome.match(/a*/g))//Zero ou mais repetições	/a*/ encontra "aaaa" ou 

let arrNome=[]

function searchString(nome){
   let regx=/\b([a-zA-Z])\w*\1\b/gi
   return nome.match(regx)
}



let nomea = ('binho,salv,louco,tiago,ovo,ente')
console.log(searchString(nomea))