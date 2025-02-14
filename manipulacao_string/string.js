// // // Manipulação de strings
// // let nome = 'Genesis';
// // let sobreNome = 'Souza'
// // console.log(nome.charAt(1)) // passamos a posição"1", ele retorna a letra que esta nessa posição"e"
// // console.log(nome.charCodeAt(0)) //retorna o código da letra que esta na posição 0
// // //nome=nome.concat(sobreNome)Aqui estamos alterando o valor da variavel nome
// // console.log(nome) // concatenando as strings

// // console.log(nome.indexOf('e')) //Indexof : você passa a strig e ele retorna a posição da primeira string passada"e a primeira foi n",se você passar uma string  inexistente, ele retorna -1.

// // console.log(nome.lastIndexOf('e'))//retorna a posição da ultima string.
// // //exemplo:no nome 'Genesis' com indexOf('e')o retorno vai ser 1,Ja com lastindexof o valor retornada sera 3,pois ele vai pegar o ultimo 'e' encontrado da string genesis

// let nome = 'genesis';
// let nome2 = 'genesis';

// console.log(nome.localeCompare(nome2))//Ele compara duas strings e retorna:
// // -1 → Se a primeira string vier antes da segunda.
// // 1 → Se a primeira string vier depois da segunda.
// // 0 → Se as duas forem iguais.
// // Portanto o retorno do console.log vai ser 0 , pois nome e nome2 são iguais

// console.log(nome.replace('g','s')) //Ela faz a substituição da primeira string selecionada, aqui fizemos a troca de "g por b"

// console.log(nome2.search('n'))// serve para fazer pesquisa da srting passada , retornando a posição da primeira ocorrêcia.
// //Se a string não contém o termo pesquisado, ele retorna -1:

// //Ele aceita expressões regulares, permitindo buscas mais avançadas:
// console.log('binho'.search(/[aeiou]/)); // Retorna 1 (pois 'i' é a primeira vogal encontrada)

// console.log(nome.slice(2,6))// O método .slice(início, fim) retorna uma parte da string, começando no índice início e parando antes do índice fim.
// // aqui pegamos parte da string da posição 2(inicio) e 6(fim)

// console.log(nome.split('g') )// Divide a string em um array, separando pelo caractere 'e'O método .split(separador) divide a string onde encontra o separador e retorna um array com as partes..


let nome ='genesis';
console.log(nome.substring(0,6)) // substring serve para retornar o valor da string,passamos a posição incio '0' e fim (ex|:'6'),lembrando que para retornar a string completa, temos que passar uma posição a mais no fim,pois ele retorna ate a posição passada
console.log(nome.toUpperCase())//Converte para maiusculo;
console.log(nome.toLowerCase())// Converte para menusculo

let num= 10
console.log(typeof(num))
num=num.toString() // fazendo a conversão do numero para 
console.log(typeof(num))