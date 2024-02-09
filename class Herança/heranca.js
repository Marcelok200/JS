class Dispositivo {
    constructor(nome, tipo, fabricante) {
        this.nome = nome;
        this.tipo = tipo;
        this.fabricante = fabricante;
        this.ligado = false;
    }

    ligarIphone() {
        if (this.ligado) {
            console.log(this.nome + " já está ligado");
        } else {
            console.log(this.nome + " foi ligado");
            this.ligado = true;
        }
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + " já está desligado");
        } else {
            console.log(this.nome + " foi desligado");
            this.ligado = false;
        }
    }
}

class Smartphone extends Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome); // Chama o construtor da classe pai com o parâmetro 'nome'
        this.cor = cor;
        this.modelo = modelo;
    }
}

const S1 = new Smartphone('Iphone', 'Preto', '13 pro max');
S1.ligarIphone();
console.log(S1);
