const form = document.querySelector('#form');
const nameInput = form.querySelector('#nome');
const emailInput = form.querySelector('#email');
const telefoneInput = form.querySelector('#telefone');
const passwordInput = form.querySelector('#password');
const jobSelect = form.querySelector('#job');
const messageTextarea = form.querySelector('#message');

const btnMostrarSenha = document.querySelector('.mostrarSenha');

btnMostrarSenha.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        btnMostrarSenha.textContent = 'Esconder';
    } else {
        passwordInput.type = 'password';
        btnMostrarSenha.textContent = 'Mostrar';
    }
});

form.addEventListener('submit', (e) => {
    // Previnir o envio
    e.preventDefault();

    // Previnir que não haja campos vazios
    if (nameInput.value === "") {
        alert('Por favor, preencha seu nome');
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert('Por favor, preencha seu E-mail');
        return;
    }

    if (passwordInput.value === "" || !isPasswordValid(passwordInput.value)) {
        alert('Por favor, preencha sua senha corretamente');
        return;
    }

    if (telefoneInput.value === "" || !isTelefoneValid(telefoneInput.value)) {
        alert('Por favor, preencha seu telefone corretamente');
        return;
    }

    if (jobSelect.value === "") {
        alert('Por favor, selecione uma opção');
        return;
    }

    if (messageTextarea.value === "" || messageTextarea.value.length < 8) {
        alert('Por favor, digite uma mensagem válida');
        return;
    }
});

const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/;
    return emailRegex.test(email);
};

const isPasswordValid = (senha) => {
    const senhaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return senhaRegex.test(senha);
};

const isTelefoneValid = (fone) => {
    const telefoneRegex = /^\d{2} \d{5}\d{4}$/;
    return telefoneRegex.test(fone);
};
