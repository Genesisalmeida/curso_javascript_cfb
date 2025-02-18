// Explessões regulares em javascript

// 3. Símbolos importantes em RegEx

// Símbolo	Significado	Exemplo
// .    Qualquer caractere	/a.b/ casa com "acb", "aab", "axb"
// \d	Qualquer dígito (0-9)	/\d+/ encontra "123" em "A123B"
// \w	Qualquer letra;A a Z, número;0 a 1 ou _	/\w+/ encontra "JavaScript"
// \s	Qualquer espaço em branco	/\s+/ encontra " "
// ^	Começo da string	/^Hello/ encontra "Hello" em "Hello world", mas não em "Oi Hello"
// $	Final da string	/world$/ encontra "world" em "Hello world"
// *	Zero ou mais repetições	/a*/ encontra "aaaa", "a", ou ""
// +	Uma ou mais repetições	/a+/ encontra "aaa" em "aaa" mas não ""
// {n}	Exatamente n repetições	/\d{3}/ encontra "123" em "12345"
// ( )	Grupo	/(\d{3})-(\d{2})/ encontra "123-45"

// + → Significa uma ou mais ocorrências desse tipo de caractere

let nome =new String ('Genesis Souza Almeida');

console.log(nome);
console.log(nome.search(/g/i)); /// Retorna a posição da primeira ocorrência da letra "g", 
// ignorando se é maiúscula ou minúscula por causa da flag "i".

console.log(nome.match(/e/g))//console.log(nome.match(/e/g)); 
// Retorna um array com todas as ocorrências da letra "e" na string "nome".
// A flag "g" (global) faz com que encontre todas as correspondências, não apenas a primeira.

console.log(nome.match(/E/gi))//Retorna um array com todas as ocorrências da letra "E" na string "nome" mesmo passando letra maiúscula,pois estamos utilizando o 'gi',lembrando que o 'i' ignora as letras maiúsculas.
// Lembrando que podemos ultilizar expressões regulares

