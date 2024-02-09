// function Pessoa(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
// }

// Pessoa.prototype.apresentar = function (){
//     console.log (`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
// };

// const pessoa01 = new Pessoa('Marcelo', 29);

// pessoa01.apresentar()

// function ContaBancaria (agencia, conta, digito, saldo){
//     this. agencia = agencia;
//     this.conta = conta;
//     this.digito = digito;
//     Object.defineProperty(this, 'saldo',{
//         enumerable: true,
//         writable: true,
//         value: saldo
//     })
// }

// ContaBancaria.prototype.sacar = function (valor){
//     if (valor > this.saldo){
//         console.log('Valor insuficiente!');
//     }else{
//         this.saldo -=  valor;
//         console.log(`Você deseja sacar ${valor}`);
//         console.log (`Você sacou ${valor}, seu saldo atual é ${this.saldo}`);
//     };
// };

// ContaBancaria.prototype.depositar = function (valor){
//     this.saldo += valor;
// };

// const conta01 = new ContaBancaria (1046, 26774, 0, 1000)


// const conta02 = {
//     ag: 1047,
//     conta: 26775,
//     digito: 0,
//     saldo: 3500
// }


// Object.setPrototypeOf(conta02, ContaBancaria.prototype);
// conta02.depositar (150000);
// conta02.sacar (250);
// console.log (conta02);

// function Livro(titulo, autor){
//     this.titulo = titulo;
//     this.autor = autor;
// }

// Livro.prototype.detalhes = function (){
//     console.log(`Livro: ${this.titulo}, Autor: ${this.autor}`)
// }
// const livro01 = new Livro('A luta de Marcelo', 'Marcelo')
// livro01.detalhes()

// const carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2024,
    
//     info: function (){
//         return `Marca: ${this.marca}, modelo: ${this.modelo} e ano ${this.ano}`
//     }
// }

// const carro02 = {
//     marca: 'Toyota',
//     modelo: 'Hillux',
//     ano: 2024
// }

// Object.setPrototypeOf(carro02, carro)

// console.log(carro02.info())


function Animal (nome, tipo){
    this.nome = nome;
    this.tipo = tipo;
}

Animal.prototype.emitirSom = function(){
    console.log (`O ${this.nome} está fazendo barulho.`)
}

const animal01 = new Animal ('Papaguaio', 'Avi')

animal01.emitirSom();