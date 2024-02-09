// const objeto01 = {
//     nome: 'Marcelo',
//     sobrenome: 'Macedo',
//     idade: 28,
//     dataNascimento: function (){
//         const dataAtual = new Date().getFullYear();
//         return dataAtual - this.idade
//     },

//     falaMeuNomme: function (){
//         return console.log(`${this.nome} é que está falando`)
//     }
// };

// objeto01.falaMeuNomme()


// const carro = {
//     modelo: 'Sedan',
//     ano: 2023,
//     cor: 'Preto',
//     detalhamentoCarro: function (){
//         console.log(`O modelo é do carro ${this.modelo} e o ano e a cor é ${this.ano} ${this.cor}`)
//     }
// }

// carro.detalhamentoCarro()

// const calculadora = {
//     valor01: 100,
//     valor02: 50,
//     soma: function (){
//         return this.valor01 + this.valor02;
//     },
//     subtracao: function (){
//         return this.valor01 - this.valor02;
//     },
//     multiplicacao: function (){
//         return this.valor01 * this.valor02;
//     },
//     divisao: function (){
//         return this.valor01 / this.valor02;
//     }
// }

// console.log(calculadora.soma(), calculadora.subtracao(), calculadora.multiplicacao(), calculadora.divisao())

// const aluno = {
//     nome: 'Marcelo',
//     notas: [10, 8, 6, 10],
//     mediaAluno: function (){
//         let media =this.notas.reduce ((acumulador, valor)=>{
//              acumulador += valor
//              return acumulador;
//         },0);
//         media = media/this.notas.length
//         return `A média do ${this.nome} é ${media}`
//     }
// }

// console.log(aluno.mediaAluno());

// const contaBancaria = {
//     titular: 'Marcelo',
//     saldo: 1000,
//     Depositar: function (valor){
//         this.saldo += valor;
//         return console.log(`Sr. ${this.titular} Seu novo saldo ${this.saldo}`)
//     },

//     sacar: function (valor){
//         if (valor > this.saldo){
//             console.log (`Saldo insuficiente, saldo da conta é ${this.saldo}`)
//             return
//         }else{
//             this.saldo -= valor;
//             return console.log (`Valor sacado foi ${valor}, então seu saldo ficou ${this.saldo}`)
//         }
//     }

// }


// contaBancaria.sacar(300);

const ContaBancaria = {
    _titular: 'Marcelo',
    _saldo: 1000,
  
    get titular() {
      return this._titular;
    },
  

  
    get saldo() {
      return this._saldo;
    },
  
    Depositar: function (valor) {
      this._saldo += valor;
      return console.log(`Sr. ${this.titular} Seu novo saldo é ${this.saldo}`);
    },
  
    sacar: function (valor) {
      if (valor > this._saldo) {
        console.log(`Saldo insuficiente, saldo da conta é ${this.saldo}`);
        return;
      } else {
        this._saldo -= valor;
        return console.log(`Valor sacado foi ${valor}, então seu saldo ficou ${this.saldo}`);
      }
    }

};
  

ContaBancaria._titular = 'Claudio';

console.log(ContaBancaria._titular)
  // Exemplo de uso
  

  