let pedro = {idade:10};
let maria = {idade:24}

if (pedro.idade >= 18){
    console.log('Maior de idade');
    if(pedro.idade >= 30){
        console.log('Voce é um adulto') // aqui temos if dentro do if, chamamos de aninhamento
    }else{
        console.log('voce é adolecente')
    }
}else{
    console.log('menor de idade')
}


let nota1 = 2; 
let nota2 = 5
let media =(nota1 + nota2)/2;

if(media >= 6 ){
    console.log('voçe esta aprovado' +':média', media);
    
}else if(media == 5 ){
    console.log('voçe esta de recuperção' + ':média' , media)
}else{
    console.log('voçe esta reprovado')
}
