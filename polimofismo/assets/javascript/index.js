function Conta(ag, conta, saldo){
    this.ag = ag;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo) return;
    this.saldo -= valor;
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
}
Conta.prototype.verSaldo = function(valor){
    console.log (`Agência: ${this.ag}, conta: ${this.conta} | saldo R$ ${this.saldo}`)
}


function ContaCorrente (ag, conta, saldo, limite){
    Conta.call (this, ag, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create (Conta.prototype);
ContaCorrente.prototype.constructo = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor){
    if(valor > (this.saldo + this.limite)){
        console.log('Saldo insuficiente!');
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupanca (ag, conta, saldo){
    Conta.call(this, ag, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructo = ContaPoupanca;

const cc = new ContaCorrente (3725, 25114, 350, 100);

cc.sacar(400);
cc.sacar(100);
cc.depositar(1000)