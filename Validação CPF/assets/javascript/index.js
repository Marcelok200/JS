const janelaModal = document.querySelector('#janela-modal');
const fechar = document.querySelector('#fechar');
const mensagem = document.querySelector('.resultado-modal');

const formulario = document.querySelector('.formCPF');
const inputCPF = formulario.querySelector('#inputCPF');
const btnEnvioCPF = formulario.querySelector('#btn-Envio-CPF');

function ValidaCPF(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (!this.cpfLimpo || isNaN(this.cpfLimpo) || this.cpfLimpo.length !== 11) {
        exibirMensagem('Preencha o formulário com um CPF válido');
        return false;
    }

    if (this.isSequencia()) {
        exibirMensagem('O CPF não pode ser uma sequência do mesmo dígito.');
        return false;
    }

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito02 = this.criaDigito(cpfParcial + digito1);

    const cpfNovo = cpfParcial + digito1 + digito02;

    return cpfNovo === this.cpfLimpo;
};


ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = cpfParcial.split('');
    let regressivo = cpfArray.length + 1;
    let acumulador = 0;

    for (let i = 0; i < cpfArray.length; i++) {
        acumulador += regressivo * Number(cpfArray[i]);
        regressivo--;
    }

    const digito = 11 - (acumulador % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const novoCPF = new ValidaCPF(inputCPF.value);

    if (novoCPF.valida()) {
        exibirMensagem('CPF validado com sucesso!', true);
    } else {
        exibirMensagem('CPF inválido');
    }
});

fechar.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('fechar')) {
        janelaModal.style.display = 'none';
    }
});

function exibirMensagem(msg, isvalid) {
    janelaModal.style.display = 'flex';
    mensagem.textContent = msg;

    if (isvalid === true) {
        mensagem.classList.add('noticiaBoa');
        mensagem.classList.remove('resultado-modal');
    } else {
        mensagem.classList.add('resultado-modal');
        mensagem.classList.remove('noticiaBoa');
    }
}
