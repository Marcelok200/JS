// class Pessoa{
//     constructor (nome, idade, cidade){
//         this.nome = nome;
//         this.idade = idade;
//         this.cidade = cidade;
//     }

//     exibirnome (){
//         console.log(`Meu nome é ${this.nome}`);
//     }

//     exibiridade (){
//         console.log(`Tenho ${this.idade} anos`);
//     }

//     exibircidade (){
//         console.log(`Sou da cidade de ${this.cidade}`);
//     }

// }

// const P1 = new Pessoa('Marcelo', 28, 'Buriticupu - Ma');

// P1.exibirnome();
// P1.exibiridade();
// P1.exibircidade();

// class Circulo{
//     constructor (raio){
//         this.raio = raio
//     }

//     calcularCircunferencia(){
//         console.log (`A circunferência do circulo é ${2*3.14*this.raio}`)
//     }
//     calcularArea(){
//         console.log (`A aréa do circulo é ${3.14*Math.pow(this.raio, 2)}`)
//     }
// }

// const circulo01 = new Circulo (2);
// circulo01.calcularCircunferencia();
// circulo01.calcularArea();

class Animal{
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade
    }

    emitirSom(){
        console.log(`O ${this.nome} de ${this.idade} anos emitiu um som`)
    }
}

class Mamifero extends Animal{
    constructor (nome, idade, tipoPelo){
        super(nome, idade);
        this.tipoPelo = tipoPelo;
    }

    emitirSom(){
        console.log(`O ${this.nome} de ${this.idade} anos emitiu um som especifico`)
    }
}

class Ave extends Animal{
    constructor (nome, idade, tipoBico){
        super(nome, idade);
        this.tipoBico = tipoBico;
    }

    emitirSom(){
        console.log(`O ${this.nome} de ${this.idade} anos emitiu um som especifico`)
    }
}

class Reptil extends Animal{
    constructor (nome, idade, tipoEscama){
        super(nome, idade);
        this.tipoEscama = tipoEscama;
    }

    emitirSom(){
        console.log(`O ${this.nome} de ${this.idade} anos emitiu um som especifico`)
    }
}

const ani = new Animal ('Animal 01', 28);
const mamif = new Mamifero ('Cachorro', 10, 'Preto');
const ave01 = new Ave ('Papagaio', 15, 'Fino');
const Reptil01 = new Reptil ('Calango', 3, 'Cinza');

ani.emitirSom()
mamif.emitirSom()
ave01.emitirSom()
Reptil01.emitirSom()