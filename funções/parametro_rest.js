// Parâmetro Rest//
let n = 0;
function calcularmedia(...resultado){ // aqui criamos spread, rest ajuda a lidar com numeros indefinidos podemos passar parametro com varios valores// ou seja parâmetro rest usando o spread;

        let calc = 0;
        for(v of resultado)  {
           calc+=v;
           
        }
        return parseFloat (calc / resultado.length).toFixed(1); // tofixed a quantidade de casa decimais/

    
};
console.log(calcularmedia(10,10))// não importa a quantidade de parâmetro passado minha função sempre retornarar minha media//
