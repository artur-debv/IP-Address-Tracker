function showAlert(isValid) {
    // Seleciona os elementos de alerta
    var alertSuccess = document.querySelector('.alert-success');
    console.log(alertSuccess)
    var alertDanger = document.querySelector('.alert-danger');

    alertSuccess.classList.add('alert-fixed-bottom-right');
    alertDanger.classList.add('alert-fixed-bottom-right');

    // Esconde ambos os alertas
    alertSuccess.style.display = 'none';
    alertDanger.style.display = 'none';

    // Mostra o alerta correto e define a mensagem
    if (isValid) {
        alertSuccess.style.display = 'block';
        alertSuccess.textContent = 'Ip informado está correto!';
        // Inicia a animação para desaparecer após 3 segundos
        setTimeout(() => {
            alertSuccess.classList.add('alert-fade-out');
        }, 3000);
    } else {
        alertDanger.style.display = 'block';
        alertDanger.textContent = 'Ip informado está inválido!';
        // Inicia a animação para desaparecer após 3 segundos
        setTimeout(() => {
            alertDanger.classList.add('alert-fade-out');
        }, 3000);
    }
}

// Regex para validar o IP
const regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;


// Chama a função showAlert com o resultado da validação
showAlert(regex.test(input_Search));