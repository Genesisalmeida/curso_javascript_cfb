// //objetos//
// class Pessoa { // Como criar um objeto 
//     constructor(P_nome,P_idade){
//         this.nome = P_nome
//         this.idade = P_idade
//     }
// };

// let pessoa1 = new Pessoa('genesis', 10);
// console.log(pessoa1.nome);
// console.log(pessoa1.idade);

//objeto aula2//

class Carro{
    constructor(p_nome,p_tipo){
        this.nome = p_nome
        if(p_tipo==1){
            this.tipo = 'esportivo';
            this.velmax = 300;
        }else if(p_tipo==2){
            this.tipo='Utilitário';
            this.velmax= 210;
        }else if(p_tipo==3){
            this.tipo = 'Passeio';
            this.velmax = 180;
        }else{
            this.tipo = 'Táxi';
            this.velmax = 180;
        }
    }
    setNome(nome){
        return this.nome = nome
    }
    getinfo(){
        return [this.nome,this.tipo,this.velmax]; // um exemplo de como retorna os valores com array
    }
    info(){ // podemos criar funções no objeto,aqui um exemplo como retornar  as informações do objeto
        console.log(`Nome:${this.nome}`);
        console.log(`Tipo:${this.tipo}`);
        console.log(`VelMax:${this.velmax}`);
        console.log(`------------`)
    };
};
let carro1 = new Carro('FERRARI',1);
let carro2 = new Carro('GOL',2);
let carro3= new Carro('COROLA',3);
let carro4 = new Carro('VOYAGE',5);
carro1.info();
carro2.info();
carro3.info();
carro4.info();

let arrayobj = carro1.getinfo()
for(let ele of arrayobj){
    console.log(ele)
}




