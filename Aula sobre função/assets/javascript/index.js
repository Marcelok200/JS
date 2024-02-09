/*function falaFrase (comeco){
    function falaResto (resto){
        return comeco + " " + resto;
    }
    return falaResto;
}

const fala = falaFrase ('Olá');
const resto = fala ('mundo!');
const resto2 = fala ('mundo cruel!');
console.log(resto2)*/

/*function executarOperacaoAsync(operacao, callback) {
    setTimeout(function() {
      const resultado = operacao();
      callback(resultado);
    }, 1000); // Simulando uma operação assíncrona
  }
  
  function minhaCallback(resultado) {
    console.log("O resultado da operação é: " + resultado);
  }
  
  function soma() {
    return 5 + 3;
  }
  
  executarOperacaoAsync(soma, minhaCallback);*/


/*function rondomSorte(min=1000, max = 3000){
  let num = Math.random() * (max - min + 1 ) + min;
  num = Math.floor(num);
  return(num);
}

function f1 (callback){
  setTimeout (function(){
    console.log('f1');
    
  }, rondomSorte())
}

function f2 (callback){
  setTimeout (function(){
    console.log('f2');
    
  }, rondomSorte())
}
function f3 (){
  setTimeout (function(){
    console.log('f3');
    
  }, rondomSorte())
} 

f1(function()){
  
}*/


(function (){

//Meu jeito de criar
/*
const sobrenome = 'Macedo';
function criarNomeCompleto(){
  const nome = criarNome()
  console.log ( nome + " " + sobrenome);
}
criarNomeCompleto()
function criarNome(){
  const nome = 'Marcelo';
  return nome;

}*/

/*const sobrenome = 'Macedo';
const criarNome =  (Nome) => {
  return Nome + " " + sobrenome;
}

const falaNome = () =>{
  console.log(criarNome('Marcelo'))
}

falaNome()
*/

function crirPessoa (nome, sobrenome, altura, peso){
  return {
    nome, 
    sobrenome,
    fala: function (assunto){
      return `${this.nome} está ${assunto} e pesa ${this.peso}`
    },
    altura,
    peso,
    imc(){
      const indice = this.peso / (this.altura **2);
      return indice.toFixed(2);
    }
  };
}

const p1 = crirPessoa('Marcelo', 'Macedo', 1.68, 82);
console.log (p1.fala('falando de javascript'))
console.log(p1.imc());

})()

  