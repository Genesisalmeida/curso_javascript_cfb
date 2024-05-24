//Conversões de json e objetos em javascript//

const pessoa = {
    nome:'genesis',
    idade:25,
    sexo:'masculino',
    curso:'java',
    id:1
}

//Convertendo  um  objeto literal  em  string_json//

const string_json = JSON.stringify(pessoa) // aqui estamos passando  obj para ser convertido em string
console.log(string_json)

 //Resultado vai  ser =>  {"nome":"genesis","idade":25,"sexo":"masculino","curso":"java","id":1}



 //Covertendo string_json em objeto//

 const json = JSON.parse(string_json)//aqui estamos passando  string  para ser convertido em OBJETO

 console.log(json)