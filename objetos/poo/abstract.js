// Abstract em POO//
class CarroPadrao{
   constructor (nome,tipo){
    this.nome = nome
    this.tipo = tipo
    this.roda = 4
    this.ligado = false
    this.portas = 4
}
info(){
    this.ligado = true
}
}


class Carro extends CarroPadrao {
    constructor(nome,marca){
         super(nome,marca)
    }
}

const car1 = new Carro('palio','fiat')
car1.info()
console.log(car1)


//
class AnimalAbstrato {
    constructor() {
      if (this.constructor === AnimalAbstrato) {
        throw new Error("Não é possível instanciar uma classe abstrata.");
      }
    }
  
    // Método abstrato
    fazerSom() {
      throw new Error("O método abstrato 'fazerSom' deve ser implementado.");
    }
  }
  

  //implementando a classe abstrata

  class Cachorro extends AnimalAbstrato {
    fazerSom() {
      console.log("Au! Au!");
    }
  }
  
  class Gato extends AnimalAbstrato {
    fazerSom() {
      console.log("Miau! Miau!");
    }
  }
  
  // como usar 
  
  try {
    const animal = new AnimalAbstrato(); // Isto lançará um erro
  } catch (e) {
    console.log(e.message);
  }
  
  const cachorro = new Cachorro();
  cachorro.fazerSom(); // Saída: Au! Au!
  
  const gato = new Gato();
  gato.fazerSom(); // Saída: Miau! Miau!
  