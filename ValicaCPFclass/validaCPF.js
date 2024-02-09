class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function () {
                return cpfEnviado.replace(/\D+/g, ''); 
            }
        });
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.criarDigito(cpfParcial);
        const digito2 = ValidaCPF.criarDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;

        return novoCpf === this.cpfLimpo;
    }

   static criarDigito(parcial) {
        const arr = parcial.split('').map(Number);
        let regressivo = arr.length + 1;
        const total = arr.reduce((ac, val) => {
            ac += val * regressivo;
            regressivo--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia == this.cpfLimpo;
    }
}

const cpf01 = new ValidaCPF('611.526.893-12');
if (cpf01.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}
