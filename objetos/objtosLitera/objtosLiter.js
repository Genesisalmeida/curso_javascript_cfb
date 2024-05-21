
// Objetos Literais
// Um objeto literal em JavaScript é uma maneira de criar um objeto usando uma sintaxe simples e direta. É chamado de "literal" porque você define o objeto diretamente no código, usando chaves {} para encapsular as propriedades e valores.

// Exemplo de um objeto literal:

const pessoa = {
  nome: 'João',
  idade: 30,
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};

pessoa.saudacao(); // Saída: Olá, meu nome é João e eu tenho 30 anos.
// Neste exemplo, criamos um objeto pessoa com três propriedades: nome, idade e saudacao (que é um método).