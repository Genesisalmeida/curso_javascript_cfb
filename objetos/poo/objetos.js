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


// Conceitos completo sobre POO JS//


// Sim, a Programação Orientada a Objetos (POO) em JavaScript é frequentemente realizada usando classes, especialmente desde que as classes foram introduzidas no ECMAScript 2015 (ES6). Embora JavaScript seja uma linguagem baseada em protótipos, o uso de classes oferece uma sintaxe mais familiar e organizada para quem está acostumado com POO em outras linguagens, como Java, C++ ou Python.

// Conceitos Básicos de POO com Classes em JavaScript
// Vamos revisar alguns conceitos fundamentais da POO e como eles são implementados em JavaScript usando classes.

// Classes e Instâncias:

// Uma classe define a estrutura e o comportamento de objetos. Uma instância é um objeto concreto criado a partir de uma classe.
// Propriedades e Métodos:

// Propriedades são variáveis que pertencem aos objetos. Métodos são funções que pertencem aos objetos.
// Encapsulamento:

// Encapsulamento é o conceito de esconder os detalhes internos de um objeto e expor apenas o que é necessário. Em JavaScript, isso pode ser feito usando propriedades privadas (com a convenção de underscore _ ou a sintaxe # para propriedades privadas).
// Herança:

// Herança permite que uma classe (subclasse) herde propriedades e métodos de outra classe (superclasse).
// Polimorfismo:

// Polimorfismo permite que métodos em diferentes classes tenham a mesma assinatura, mas comportamentos diferentes. Em JavaScript, isso é frequentemente realizado através da herança e da sobrescrita de métodos.
// Exemplo Prático
// Vamos criar um exemplo prático para ilustrar esses conceitos.


//Definindo Classes e Instâncias:
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

const joao = new Pessoa('João', 30);
joao.saudacao(); // Saída: Olá, meu nome é João e eu tenho 30 anos.




//Encapsulamento:
class ContaBancaria {
  #saldo; // Propriedade privada

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    this.#saldo += valor ;
    console.log(`Depósito de R$${valor}. Saldo atual: R$${this.#saldo}.`);
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor}. Saldo atual: R$${this.#saldo}.`);
    } else {
      console.log('Saldo insuficiente.');
    }
  }
}

const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500); // Saída: Depósito de R$500. Saldo atual: R$1500.
minhaConta.sacar(200); // Saída: Saque de R$200. Saldo atual: R$1300.



// Herança e Polimorfismo:
class Animal {
  fazerSom() {
    console.log('Som genérico do animal.');
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log('Latido!');
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log('Miau!');
  }
}

const meuCachorro = new Cachorro();
const meuGato = new Gato();

meuCachorro.fazerSom(); // Saída: Latido!
meuGato.fazerSom(); // Saída: Miau!

// Resumo
// Classes e Instâncias: As classes definem a estrutura e o comportamento dos objetos; instâncias são objetos criados a partir das classes.
// Encapsulamento: Permite esconder detalhes internos dos objetos e expor apenas o necessário.
// Herança: Permite que uma classe herde propriedades e métodos de outra classe.
// Polimorfismo: Permite que métodos com a mesma assinatura tenham comportamentos diferentes em classes diferentes.
// A POO com classes em JavaScript facilita a criação de código organizado, reutilizável e fácil de manter, utilizando conceitos bem estabelecidos da programação orientada a objetos.



