//Polimorfismo  em javascript//

// Polimorfismo é um conceito poderoso que permite que seu código seja mais flexível e extensível. Usando classes e herança, você pode definir comportamentos comuns em uma classe base e especializá-los em subclasses, permitindo que o mesmo método se comporte de maneira diferente dependendo do objeto que o chama. Isso é fundamental para o design orientado a objetos e pode ajudar a criar sistemas mais bem organizados e fáceis de manter.

class Pet {
    constructor(nome, cor, som) {
        this.nome = nome;
        this.cor = cor;
        this.som = som;
    }
    fazerBarulho() {
        console.log(this.som);
    }
}

class Gato extends Pet {
    constructor(nome, cor) {
        super(nome, cor, 'miau'); // Passa o som 'miau' por padrão para um gato
    }
    fazerBarulho() {
        console.log('Gato faz:', this.som);
    }
}

class Cachorro extends Pet {
    constructor(nome, cor) {
        super(nome, cor, 'auau'); // Passa o som 'auau' por padrão para um cachorro
    }
    fazerBarulho() {
        console.log('Cachorro faz:', this.som);
    }
}

const p2 = new Gato('Tom', 'cinza');
p2.fazerBarulho(); // Output: Gato faz: miau
console.log('Gato:', p2);

const p1 = new Cachorro('Rex', 'preto');
p1.fazerBarulho(); // Output: Cachorro faz: auau
console.log('Cachorro:', p1);




