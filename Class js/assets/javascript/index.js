// // const _velocidade = Symbol('velocidade');
// // class Carro {
// //     constructor (nome){
// //         this.nome = nome;
// //         this[_velocidade] = 0
// //         this[_consumoCombustivel] = 10
// //     }

// //     get velocidade (){
// //         return this[_velocidade];
// //     }

// //     set velocidade (valor){
// //         if (typeof valor !== 'number') return; 
// //         if(valor > 100 || valor < 0) return;
// //         this[_velocidade] = valor;
// //     }

// //     acelerar (){
// //         if (this[_velocidade] >= 100) return;
// //         this[_velocidade]++;
// //     }
// //     freiar (){
// //         if (this[_velocidade] <= 0) return;
// //         this[_velocidade]--;
// //     }
// // }

// // const c1 = new Carro ('Fusca');

// // c1.velocidade = 80;
// // console.log(c1.velocidade)

// // const _ligado = Symbol('Combustivel');

// // class Carro {
// //     constructor(nome) {
// //         this.nome = nome;
// //         this.velocidade = 0;
// //         this[_ligado] = false;

// //     }

// //     get ligar (){
// //         return this[_ligado];
// //     }

// //     set ligar (valor){
// //             this[_ligado] = valor;
        
// //     }

// //     get desligar(){
// //         return this[_ligado];
// //     }

// //     set desligar (valor){
// //             this[_ligado] = valor;     
// //     }

// //     acelerar (valocidade){
// //         if (!this[_ligado]){
// //             console.log('Carro está desligado!');
// //             return
// //         }
// //         return this.velocidade = valocidade;
// //     }

// // }

// // const c1 = new Carro('Fusca')
// // c1.ligar = true;
// // c1.acelerar(10)
// // console.log(c1);



// const _idade = Symbol('idade');
// class Pessoa{
//     constructor(nome){
//         this.nome = nome;
//         this[_idade] = 0;
//     }

//     get idade (){
//         return this[_idade]
//     }

//     set idade (idade){
//         if (idade < 0){
//             console.log('Idade invalida');
//         }
//         this[_idade] = idade 
//     }
// }

// const p1 = new Pessoa('Marcelo');

// p1.idade=10;
// console.log(p1);

/*class Dispositivo {
    constructor (nome){
        this.nome = nome;
        this.ligado = false
    }

    get ligar (){
        return this.ligado;
    }

    set ligarIphone (valor){
        if (this.ligado){
            console.log(this.nome + "Já está ligado");
        }
        return this.ligado = true;
    }


    set desligar (valor){
        if (!this.ligado){
            console.log(this.nome + "Já está desligado");
        }
        return this.ligado = false;
    }
}

const d1 = new Dispositivo ('Iphone');
d1.ligarIphone = true
console.log(d1.ligado)*/

class Dispositivo {
    constructor(nome) {
        this.nome = nome;
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

const d1 = new Dispositivo('Iphone');
d1.ligarIphone();
console.log(d1.ligado);
