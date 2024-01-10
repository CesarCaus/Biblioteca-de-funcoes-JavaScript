function salvarDados(chave, dados) { //Função para salvar os dados em Local Storage
    localStorage.setItem(chave, JSON.stringify(dados));
}

function recuperarDados(chave) { //Função para recuperar dados do Local Storage
    return JSON.parse(localStorage.getItem(chave))
}

function inputsVazios(inputs) { //Função para validar se existem Inputs vazios
    if (!Array.isArray(inputs)) {
        inputs = [inputs]; 
    }

    let inputVazio = false;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            inputVazio = true;
        }
    });

    return inputVazio;
}

function validarCaractereSpace(input) { //Função para validar se existe o caractere space
    let space = false;
    
    for (var i = 0; i < input.value.length; i++) {
        var caractere = input.value[i];
    
        if (caractere === ' ') {
            space = true; 
            break;
        }
    }
    
    return space;
}

function validarCaracteresInvalidos(input) { //Função para remover caracteres não desejaveis
    return /[áàâãéèêìíïóòôõöúùûçñ,\.|\/(){}!@#$%¨&*?¹²³£¢¬+=§]/.test(input.value);
}

function removerCaracteresNaN(input) {//Função para remover caracteres não numericos
    let inputFormatado = input.value.replace(/\D/g, '');
 
    return inputFormatado;
}

function formatarNumeroCelular(input) { //Função para formatar o input de número de celular
    input.addEventListener('input', function (event) {
        let input = event.target;
        let inputValue = input.value.replace(/\D/g, '');
        let formattedValue = inputValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        input.value = formattedValue;
    });
}

function validarLenghtCelular(input) { //Função para validar a quantidade de caracteres dentro do input de numero de celular
    return input.length === 11;
}

function validarFormatacaoEmail(input) { //Função para validar se o formato do email é valido
    return /(gmail|hotmail|live|outlook|bol|googlemail|yahoo|uol)\.com$/i.test(input.value);;
}