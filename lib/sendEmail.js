(function () {
    emailjs.init("3a2woiiCL7pbIwisV"); // Substitua "seu_userID" pelo seu user ID
})();


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe a mensagem de carregamento
    document.querySelector('.loading').style.display = 'block';

    // Coleta os dados do formulário
    const templateParams = {
        name: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('text').value,
        list: document.getElementById('list').value,
        message: document.getElementById('message').value,

    };

    // Envia o e-mail usando EmailJS
    emailjs.send('service_nibc36d', 'template_6afg2ro', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.sent-message').style.display = 'block';
        }, function (error) {
            console.log('FAILED...', error);
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.error-message').style.display = 'block';
        });
});