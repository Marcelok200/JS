function Calculadora() {
    this.display = document.querySelector('.display');

    this.iniciar = () => {
        this.associarEventos();
    };

    this.associarEventos = () => {
        document.addEventListener('click', this.tratarClique);
        document.addEventListener('keyup', this.tratarTecla);
    };

    this.tratarClique = (e) => {
        const el = e.target;
        if (el.classList.contains('btn_Num')) {
            this.btnParaDisplay(el.innerText);
            this.display.focus();   
        }

        if (el.classList.contains('btn_Clean')) {
            this.limparDisplay();
        }

        if (el.classList.contains('btn_del')) {
            this.apagarUm();
        }

        if (el.classList.contains('btn_eq')) {
            this.calcularResultado();
        }
    };

    this.tratarTecla = (e) => {
        if (e.keyCode === 13) {
            this.calcularResultado();
        }
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };

    this.limparDisplay = () => {
        this.display.value = '';
    };

    this.apagarUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.calcularResultado = () => {
        try {
            const conta = eval(this.display.value);
            if (isNaN(conta) || !isFinite(conta)) {
                throw new Error('Conta inválida!');
            }
            this.display.value = conta;
        } catch (error) {
            this.display.value = 'Erro';
            console.error(error);
        }
    };
}

const Calculadora01 = new Calculadora();
Calculadora01.iniciar();

    