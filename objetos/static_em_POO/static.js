// static em POO//


// O que é um método estático?
// Um método estático é uma função que pertence a uma classe em vez de a um objeto criado a partir dessa classe. Isso significa que você pode chamar esse método diretamente usando o nome da classe, sem precisar criar um objeto dessa classe.

// Como criar um método estático?
// Para criar um método estático, você usa a palavra-chave static antes do nome do método. Aqui está um exemplo:


class MinhaClasse {
    // Este é um método estático
    static meuMetodoEstatico() {
        console.log('Este é um método estático.');
    }

    // Este é um método normal (não estático)
    meuMetodoNormal() {
        console.log('Este é um método normal.');
    }
}

//Você chama um método estático diretamente usando o nome da classe:

MinhaClasse.meuMetodoEstatico(); // Saída: Este é um método estático.


//Quando usar métodos estáticos?
// Use métodos estáticos para ações que estão relacionadas à classe, mas não precisam de informações de objetos específicos criados dessa classe. Eles são úteis para funções utilitárias.

// Exemplo prático simples
// Vamos criar uma classe Calculadora com métodos estáticos para somar e subtrair números:

class Calculadora {
    static somar(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }
}

// Você pode usar os métodos estáticos sem criar um objeto
console.log(Calculadora.somar(10, 5));    // Saída: 15
console.log(Calculadora.subtrair(10, 5)); // Saída: 5
