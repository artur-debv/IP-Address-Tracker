document.addEventListener('DOMContentLoaded', (event) => {
    // Esconde os alertas quando a página é carregada
    document.querySelector('.alert-success').style.display = 'none';
    document.querySelector('.alert-danger').style.display = 'none';
});

function showAlert(isValid) {
    // Seleciona os elementos de alerta
    var alertSuccess = document.querySelector('.alert-success');
    var alertDanger = document.querySelector('.alert-danger');

    // Esconde ambos os alertas
    alertSuccess.style.display = 'none';
    alertDanger.style.display = 'none';

    // Mostra o alerta correto e define a mensagem
    if (isValid) {
        alertSuccess.style.display = 'block';
        alertSuccess.textContent = 'Ip informado está correto!';
        // Inicia a animação para desaparecer após 3 segundos
        setTimeout(() => {
            alertSuccess.style.display = 'none';
        }, 2000);
    } else {
        alertDanger.style.display = 'block';
        alertDanger.textContent = 'Ip informado está inválido!';
        // Inicia a animação para desaparecer após 3 segundos
        setTimeout(() => {
            alertDanger.style.display = 'none';
        }, 2000);
    }
}

// Regex para validar o IP
const regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;

// Seleciona o campo de entrada
const input_Search = document.querySelector(".input-field");

// Adiciona um ouvinte de evento para detectar cada entrada do usuário
input_Search.addEventListener('input', function() {
    // Chama a função showAlert com o resultado da validação
    showAlert(regex.test(input_Search.value));
});