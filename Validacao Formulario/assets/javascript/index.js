class ValidacaoForm {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validaForm = this.validaFormulario();
        const validaSenhas = this.validaSenha();
        
        if (validaForm && validaSenhas){
            alert('Formulario enviado');
            this.formulario.submit()
        }
    }

    validaSenha(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.senha-repetida');
        
        if(senha.value.legnth < 6 || senha.value.legnth > 12){
            this.messageErr(senha, `A senha tem que está entre 6 a 12 caracteres`);
            valid = false;
        }

        if (senha.value !== repetirSenha.value){
            this.messageErr(senha, `As senhas têm que ser iguais`);
            this.messageErr(repetirSenha, `As senhas têm que ser iguais`);
            valid = false;
        }

        return valid;

    }

    validaFormulario() {
        let valid = true;

        for (let erroText of this.formulario.querySelectorAll('.error-text')){
            erroText.remove()
        }
        
        for (let campo of this.formulario.querySelectorAll('.valida')) {
            let label = campo.previousElementSibling.innerText;
            
            if (!campo.value.trim()) {
                this.messageErr(campo, `O '${label}' não pode estar vazio, preencha o campo.`);
                valid = false;
            }

            if (campo.classList.contains('userCpf')){
                if (!this.cpfValido(campo))  valid = false;
            }

            if (campo.classList.contains('user')){
                if(!this.validaUser(campo)) valid = false;
            }
        }

        return valid;
    }
    cpfValido(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.messageErr(campo,`Cpf inválido`); 
            return false;
        }
        
        return true;
    }

    validaUser(campo){
        let valid = true;
        if(campo.value.legnth < 3 || campo.value.legnth > 12){
            this.messageErr(campo, `O nome de usuário tem que está entre 3 a 12 caracteres`);
            valid = false;
        }

        if(!campo.value.match(/^[a-zA-Z0-9]+$/g)){
            this.messageErr(campo, `O usuário só pode ter letras e/ou números`);
            valid = false;
        }

        return valid;
    }

    messageErr(campo, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validacao = new ValidacaoForm();
