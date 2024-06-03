//Herança em Javascript

///Herança em programação orientada a objetos (POO) é um mecanismo que permite que uma classe (subclasse ou classe derivada) herde propriedades e métodos de outra classe (superclasse ou classe base). Isso promove a reutilização de código e a criação de uma estrutura hierárquica.

// Definindo a classe pai
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    getDescricao() {
        return `${this.marca} ${this.modelo}`;
    }

    buzinar() {
        console.log('Buzinando: Beep beep!');
    }
}

// Definindo a classe filha que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, ano) {
        // Chamando o construtor da classe pai
        super(marca, modelo);
        this.ano = ano;
    }

    getDescricao() {
        // Chamando o método getDescricao da classe pai
        const descricaoPai = super.getDescricao();// Em JavaScript, você pode usar super para chamar métodos da classe pai (superclasse) dentro da classe filha (subclasse). Vamos ver um exemplo mais detalhado que demonstra esse conceito:
        return `${descricaoPai}, ano ${this.ano}`;
    }
}

// Criando uma instância da classe Carro
const meuCarro = new Carro('Toyota', 'Corolla', 2020);

// Usando os métodos da classe Carro
console.log(meuCarro.getDescricao()); // Output: Toyota Corolla, ano 2020
meuCarro.buzinar(); // Output: Buzinando: Beep beep!
