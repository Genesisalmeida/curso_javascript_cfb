const nome = document.querySelector('#name');
const portas = document.querySelector('#porta');
const blindagem = document.querySelector('#blindagem');
const municao = document.querySelector('#municao');
const typeMilitar = document.querySelector('#tipomilitar');
const typeNormal = document.querySelector('#tiponormal');
const button = document.querySelector('#but');
const buttonDelete = document.querySelector('#delete')
const res = document.querySelector('.res');
let car = [];

// Função para remover um carro com o nome especificado
const removerCar = (carRemove) => {
    let removed = false; // Variável de controle para garantir que apenas o primeiro carro seja removido
    car = car.filter((ele) => {
        if (!removed && ele.nome === carRemove) {
            removed = true; // Marca que um carro foi removido
            return false; // Não inclui o carro removido no novo array
        }
        return true; // Inclui todos os outros carros no novo array
    });
    
}


// Criando a classe Carro
class Carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.cor='azul'
    }

    ligar = () => {
        this.ligado = true;
    }

    desligar = () => {
        this.ligado = false;
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
    }
}

// Função para criar um carro normal
const newCarnormal = () => {
    const c1 = new Carro(nome.value, portas.value);
    car.push(c1);
    renderCars();
}

// Função para criar um carro militar
const newCarMilitar = () => {
    const c2 = new Militar(nome.value, portas.value, blindagem.value, municao.value);
    car.push(c2);
    renderCars();
   
}

// Função para renderizar os carros
const renderCars = () => {
    res.innerHTML = ''; // Limpa o conteúdo da div de resultado
    car.forEach(ele => {
        const button = document.createElement('button')
        button.setAttribute('id','delete')
        button.textContent='delete'
        button.addEventListener('click',(evt)=>{
            const remover = evt.target.parentNode.dataset.nome
            removerCar(remover)
            console.log(car)
           renderCars()
    
        })
        const div = document.createElement('div');
        div.setAttribute('class', 'ress');
        div.setAttribute('data-nome',ele.nome)
        div.style.display = 'flex';
        div.innerHTML = `Nome: ${ele.nome}<br/>Portas: ${ele.portas}`;
        if (ele instanceof Militar) {
            div.innerHTML += `<br/>Blindagem: ${ele.blindagem}<br/>Munição: ${ele.municao}`;
        }
        res.appendChild(div);
        div.appendChild(button)
       
    });
}

// Evento de clique do botão add
button.addEventListener('click', () => {
    if (typeNormal.checked) {
        newCarnormal();
    } else {
        newCarMilitar();
    }
    
});

// Evento de clique do botão delete


// Função para habilitar/desabilitar campos com base no tipo de carro selecionado
const toggleFields = () => {
    if (typeMilitar.checked) {
        blindagem.removeAttribute('disabled');
        municao.removeAttribute('disabled');
    } else {
        blindagem.value = 0;
        municao.value = 0;
        blindagem.setAttribute('disabled', 'disabled');
        municao.setAttribute('disabled', 'disabled');
    }
}

// Eventos para mudança de tipo de carro
typeMilitar.addEventListener('change', toggleFields);
typeNormal.addEventListener('change', toggleFields);

// Inicialização dos campos
toggleFields();
