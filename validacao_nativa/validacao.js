const nome = document.querySelector('#nome');
const nota = document.querySelector('#nota');
const button = document.querySelector('#validar')
const msg = document.querySelector('#msg');

button.addEventListener('click', (evt) => {
    evt.preventDefault(); // Evita o envio do formulário

    // Verifica se o campo "nota" está vazio
    if (nota.validity.valueMissing) {

        nota.setCustomValidity('A nota é obrigatória!'); // Define uma mensagem de erro
        // msg.textContent = 'Por favor, preencha a nota.';
    }else if(nota.validity.rangeOverflow){//rangerUnder  valida valor baixo
             nota.setCustomValidity('Valor muito alto')

    }else if(nota.validity.rangeUnderflow){ //rangerUnder  valida valor baixo
            nota.setCustomValidity('Nota baixa,digite um valor mais alto')

    }else {
        // Se a nota for válida, limpa a mensagem de erro
        nota.setCustomValidity('');
        // msg.textContent = 'Nota válida!';
    }
    nota.reportValidity()// reporta a validação na tela do usuário
});